
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

require("@nomicfoundation/hardhat-toolbox")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */


// require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    // ropsten: {
    //   url: process.env.ROPSTEN_URL || "",
    //   accounts:
    //     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    // },
    mumbai: {
      url: "https://public.stackup.sh/api/v1/node/polygon-mumbai	", 
      gasPrice: 3500000000000000,
      saveDeployments: true,
      accounts: ["b79dc3a198525a267fabfe7283b0054e4306c7b32a76d55af273c915d6c3c106"]
       
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc" , 
      accounts:["b79dc3a198525a267fabfe7283b0054e4306c7b32a76d55af273c915d6c3c106"]
    },
    fantomtest: {
      gasPrice: 350000000000,
      saveDeployments: true,
      url: "https://rpc.testnet.fantom.network" , 
      accounts: ["b79dc3a198525a267fabfe7283b0054e4306c7b32a76d55af273c915d6c3c106"]
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};