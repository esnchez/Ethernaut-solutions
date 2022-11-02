# Ethernaut solutions

In contracts folder, there are the original Ethernaut contracts and, whenever it is needed, a malicious contract file mostly named as the current challenge plus "attack" keyword. This attacking contract is also deployed in the script. Also, every script includes notes to clarify the process of solving each level.

### Run challenge solutions 

1. Install
```
git clone https://github.com/esnchez/The-Ethernaut-solutions.git
yarn install

2. Make sure local network is running (go to ethernaut-local-setup repo to set it up)
2. Compile contracts
```
yarn hardhat compile

3. Deploy challenge contract on frontend/client to local network. 
4. Take the contract address (explore console in developer tools) and place it in the corresponding script. 
5. Make sure the player address is also changed accordingly.  
4. Run solution script
```
yarn hardhat run scripts/{name}.ts --network localhost



Complete some part / figure out strange behaviour..

Privacy
Vault , both depending on get storage 

Preservation, second delegatecall does not work 
