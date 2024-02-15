// import hre from 'hardhat';

// async function main() {
//   const quickNodeToken = await hre.ethers.deployContract('QuickNodeToken');
//   await quickNodeToken.waitForDeployment();
//   console.log(`Contract deployed to ${quickNodeToken.target}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exit(1);
// });

import hre from "hardhat";

async function deploySimpleDEX(tokenAddress, usdtAddress, usdcAddress, quickNodeTokenAddress) {
  // Load the contract artifact (factory) for SimpleDEX
  const SimpleDEX = await hre.ethers.getContractFactory("SimpleDEX");

  // Deploy the SimpleDEX contract, providing constructor arguments
  const simpleDEXInstance = await SimpleDEX.deploy(
    tokenAddress,
    usdtAddress,
    usdcAddress,
    quickNodeTokenAddress
  );

  // Wait for the deployment transaction to be mined
  await simpleDEXInstance.deployed();

  // Log deployment address
  console.log(`SimpleDEX deployed to ${simpleDEXInstance.address}`);

  // Return the deployed contract instance
  return simpleDEXInstance;
}

async function main() {
  // Assuming you already have the addresses of the token contracts and the QuickNodeToken contract
  const tokenAddress = "TOKEN_ADDRESS";
  const usdtAddress = "USDT_ADDRESS";
  const usdcAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const quickNodeTokenAddress = "0xBEe6FFc1E8627F51CcDF0b4399a1e1abc5165f15";

  // Deploy SimpleDEX contract
  await deploySimpleDEX(tokenAddress, usdtAddress, usdcAddress, quickNodeTokenAddress);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
