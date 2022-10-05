import { ethers } from "hardhat";

//Fit player and admin addresses chosen from hardhat node addresses 
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const deployer = "0x2546bcd3c84621e976d8185a91a922ae77ecec30";

async function main() {

const signer = await ethers.getSigner(deployer);
const fortaFactory = await ethers.getContractFactory("Forta", signer);
const cryptoVaultFactory = await ethers.getContractFactory("CryptoVault", signer);
const legacyTokenFactory = await ethers.getContractFactory("LegacyToken", signer);
const depFactory = await ethers.getContractFactory("DoubleEntryPoint", signer);

const fortaContract = await fortaFactory.deploy();
const cryptoVaultContract = await cryptoVaultFactory.deploy(deployer);
const legacyTokenContract = await legacyTokenFactory.deploy();
const depTokenContract = await depFactory.deploy(legacyTokenContract.address, cryptoVaultContract.address, fortaContract.address, PLAYER_ADDRESS);

await cryptoVaultContract.setUnderlying(depTokenContract.address);
await legacyTokenContract.delegateToNewContract(depTokenContract.address);
await legacyTokenContract.mint(cryptoVaultContract.address, ethers.utils.parseEther("100"));


//HACK STEPS (Implement bot to raise alerts and prevent vault exploit)
//Cryptovault address starts with 100 both Legacy and DEP tokens. Cryptovault's sweep function
//allows us to sent to pre-set address all tokens the Vault may receive, with the exception of underlying token. Sweeping on Legacy token 
//DEP is the underlying token and cannot be swept, but sweeping on LegacyToken triggers transfer function on the token itself.
//Observing LT contract, ERC20 transfer func is overwritten and it is delegating the call to delegateTransfer function in DEP contract,
// so we are actually transfering DEP tokens.
//During the execution of that function, modifier related to forta logic has to prevent the vault's token drain,
//implementing a bot that raise alerts in such case: (msg.sender equals to LT is ensured in first modifier check),
//the origSender equals to cryptovault and LT it is calling us DEP contract via delegateTransfer function.  

// 1. Check the starting values
console.log("Forta deployed at address:",  fortaContract.address)
console.log("CryptoVault deployed at address:",  cryptoVaultContract.address)
console.log("Legacy token deployed at address:",  legacyTokenContract.address)
console.log("DEP token deployed at address:",  depTokenContract.address)
console.log("Vault's balance for Legacy token:",  await legacyTokenContract.balanceOf(cryptoVaultContract.address))
console.log("Vault's balance for DEP token:", await depTokenContract.balanceOf(cryptoVaultContract.address))
console.log("-----------------")

// 2. Deploy bot contract with the constructor parameters (cryptoVault address and delegateTransfer func signature)
const detectionBotFactory = await ethers.getContractFactory("DetectionBot", signer);
const iface = new ethers.utils.Interface(["function delegateTransfer(address to, uint256 value, address origSender)"]);
const funcSignature = iface.getSighash("delegateTransfer")
console.log("delegateTransfer function signature", funcSignature);
const detectionBotContract = await detectionBotFactory.deploy(cryptoVaultContract.address, funcSignature);

// 3. Implement bot in Forta logic. Same player address as DEP token contract player has to set up the bot in Forta.
const player = await ethers.getSigner(PLAYER_ADDRESS);
console.log("userDetectionBot deplyed by player:", await fortaContract.usersDetectionBots(player.address))
await fortaContract.connect(player).setDetectionBot(detectionBotContract.address);
console.log("userDetectionBot address deployed by player:", await fortaContract.usersDetectionBots(player.address))
console.log("player's userDetectionBot raised alerts:", await fortaContract.botRaisedAlerts(detectionBotContract.address))

// 4. Trigger sweep function on LegacyToken.
await cryptoVaultContract.sweepToken(legacyTokenContract.address) 

// 5. Alert displayed successfully and tx was reverted!! hide previous line and check vault balances 
console.log("Vault's balance for Legacy token:",  await legacyTokenContract.balanceOf(cryptoVaultContract.address))
console.log("Vault's balance for DEP token:", await depTokenContract.balanceOf(cryptoVaultContract.address))
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
