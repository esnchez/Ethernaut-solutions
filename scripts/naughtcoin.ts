import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x24B3c7704709ed1491473F30393FFc93cFB0FC34";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);

const contract = await ethers.getContractAt("NaughtCoin", CONTRACT_ADDRESS, signer);

//HACK STEPS

// 1. Check initial supply, player address and his balance
let initSupply = await contract.INITIAL_SUPPLY();
console.log("Token initial supply: ", initSupply.toString())
console.log("Player address is: ", await contract.player())
let playerBalance = await contract.balanceOf(PLAYER_ADDRESS)
console.log("and this is his balance: ", playerBalance.toString())

// 2. To reduce my balance to 0, I can call any of the ERC20 inherited functions.
// Bypass transfer locked function.





}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
