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


import hre from 'hardhat';

async function main() {
  console.log("deploying...")
  const swapContract = await hre.ethers.deployContract('SwapContract');
  await swapContract.waitForDeployment();
  console.log(`Contract deployed to ${swapContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

