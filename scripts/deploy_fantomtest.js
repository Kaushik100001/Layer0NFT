const hre = require("hardhat");
async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf",
    0,
    100
  );
  await omniChainNFT.deployed();
  console.log(
    "Fantom testnet ----- omniChainNFT deployed to:",
    omniChainNFT.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Fantom testnet ----- omniChainNFT deployed to: 0x8dE0b7B2C55a703b11cd8966300f94e932B9A342