// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat";


async function deployQuickNodeToken() {
  const QuickNodeToken = await hre.ethers.deployContract('QuickNodeToken');
  await QuickNodeToken.waitForDeployment();
  console.log(`QuickNodeToken deployed to ${QuickNodeToken.target}`);
}

async function deployAnotherContract() {
  const SimpleDEX = await hre.ethers.deployContract('SimpleDEX');
  await SimpleDEX.waitForDeployment();
  console.log(`AnotherContract deployed to ${SimpleDEX.target}`);
}

async function main() {
  // Deploy QuickNodeToken contract
  await deployQuickNodeToken();

  // Deploy AnotherContract contract
  await deployAnotherContract();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
