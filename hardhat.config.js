require("@nomicfoundation/hardhat-toolbox");
// Import the Hardhat Toolbox plugin
require("dotenv").config();
//Load variables from the .env file into process .env
// Load environment variables from the .env file into process.env in order to keep sensitive information such 
//as private key out of the code


/** @type import('hardhat/config').HardhatUserConfig */
// Comment for TypeScript support 

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
// Read .env variables

module.exports = {
  solidity: "0.8.24",

  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      // RPC URL to connect to the Ethereum Sepolia testnet
      accounts: [PRIVATE_KEY],
      // Deployer address private key (kept secure via .env).
      // Hardhat will use this account to sign transactions on Sepolia, and transaction fee will be counted on 
      //that account also
    },
  },

  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    // API key used for verifying contracts on Etherscan (Sepolia testnet explorer). Allow to publish and 
    //verify contract
  },
};