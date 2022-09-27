import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

//config taken from ethernaut repository
const config: HardhatUserConfig = {
  //solidity: "0.8.17",

  solidity : {
    compilers: [
      {
        version: "0.5.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        }
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        }
      }
    ]
  },
  paths: {
    artifacts: './build'
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
  }
};

export default config;
