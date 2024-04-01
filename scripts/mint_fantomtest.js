const hre = require("hardhat");
async function main() {
  const account = "0x49C7cfc293bC154c54798374C079635E77F48b1E";
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    " 0x8dE0b7B2C55a703b11cd8966300f94e932B9A342"
  );
  await omniChainNFT.mint();
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Fnatom NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(1);
  console.log("Token 1 owner: ", owner);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});