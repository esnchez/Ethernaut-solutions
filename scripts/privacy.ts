import { ethers } from "hardhat";

const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x32467b43BFa67273FC7dDda0999Ee9A12F2AaA08";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);

//Fit contract name and address (current lvl instance)
const contract = await ethers.getContractAt("Privacy" ,CONTRACT_ADDRESS, signer);

// 1. Pending on reading storage data... 


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
