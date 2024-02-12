import hre from "hardhat";

async function main() {
  const quickNodeToken = await hre.ethers.deployContract("QuickNodeToken");
  await quickNodeToken.waitForDeployment();
  console.log(`Cupcake vending machine deployed to ${quickNodeToken.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
