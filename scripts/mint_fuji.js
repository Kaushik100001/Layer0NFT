const hre = require("hardhat");
async function main() {
  const account = "0x49C7cfc293bC154c54798374C079635E77F48b1E";
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x1478d61D8AB595a13289fd4Cf0cc178a65547c37"
  );
  await omniChainNFT.mint();
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Fuji NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(101);
  console.log("Token 1 owner: ", owner);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});