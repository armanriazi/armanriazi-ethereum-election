/*var HDWalletProvider = require("truffle-hdwallet-provider");

var privateKeys = [
  "0xf93ad9df5ae24716ff810d7b08add307af8e06bb2b0126896c9684527ab3f8f6",
];
const provider = new HDWalletProvider(privateKeys, "http://0.0.0.0:8545", 0, 1); //start at address_index 0 and load both addresses
*/

//var Accounts = require("web3-eth-accounts");

// Passing in the eth or web3 package is necessary to allow retrieving chainId, gasPrice and nonce automatically
// for accounts.signTransaction().
//var accounts = new Accounts("http://0.0.0.0:8545");
/**
 * accounts: 25,
      defaultEtherBalance: 500,
      blockTime: 3, 
 *
 */
module.exports = {
  networks: {
    development: {
      host: "0.0.0.0",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },
};
