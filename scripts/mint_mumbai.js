const hre = require("hardhat");

async function main() {
  const account = " 0x49C7cfc293bC154c54798374C079635E77F48b1E";
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  await omniChainNFT.mint();
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Mumbai NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(201);
  console.log("Token 201 owner: ", owner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});