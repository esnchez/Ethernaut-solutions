import { ethers } from "hardhat";
// import { getStorageAt } from "@nomicfoundation/hardhat-network-helpers";


const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x8aCd85898458400f7Db866d53FCFF6f0D49741FF";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
// const provider =  new ethers.providers.JsonRpcProvider("http://localhost:8545");


//Fit contract name and address (current lvl instance)
const contract = await ethers.getContractAt("Vault" ,CONTRACT_ADDRESS, signer);

// 1. Check locked value
console.log("locked value is: ", await contract.locked());

// 2. Reveal password state variable via getStorageAt and the storage slot.

//NOT WORKING JSON-RPC ISSUE
// const pos = ethers.utils.hexValue(1);
// const index = ethers.utils.hexZeroPad(pos,32);

const password = await ethers.provider.getStorageAt(contract.address,1);
// const password = await getStorageAt(contract.address, 1)
console.log("Password is: ", password);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// UNFINISHED, GET STORAGE AT DOES NOT WORK ....  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
