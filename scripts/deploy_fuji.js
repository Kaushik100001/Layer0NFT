const hre = require("hardhat");
async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706",
    100,
    200
  );
  await omniChainNFT.deployed();
  console.log("Fuji ----- omniChainNFT deployed to:", omniChainNFT.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Fuji ----- omniChainNFT deployed to: 0x1478d61D8AB595a13289fd4Cf0cc178a65547c37