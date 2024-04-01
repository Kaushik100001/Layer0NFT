const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x8dE0b7B2C55a703b11cd8966300f94e932B9A342"
  );

  // Set a higher gas limit to accommodate potential variations (adjust as needed)
  const gasLimit = 250000; // Experiment to find the optimal value

  try {
    await omniChainNFT.crossChain(
      10006,
      "0x1478d61D8AB595a13289fd4Cf0cc178a65547c37",
      ethers.BigNumber.from("1"),
      {
        value: ethers.utils.parseEther("5"),
        gasLimit: gasLimit, // Add the gasLimit property here
      }
    );
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
