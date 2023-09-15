import hre from "hardhat";
import { ethers, upgrades } from "hardhat";
import { targets } from "../targets";

// deploy inviCore contract
export const deployInviCoreContract = async (
  stTokenContract: String,
  liquidStakingAddress: String,
  network: String
) => {
  let InviCoreContract;
  let inviCoreContract;

  InviCoreContract = await ethers.getContractFactory("InviCore");
  inviCoreContract = await upgrades.deployProxy(InviCoreContract, [stTokenContract], { initializer: "initialize" });
  await inviCoreContract.deployed();

  return inviCoreContract;
};

let stTokenContractAddress: string;
let liquidStakingAddress: string;
async function main() {
  const network: string = targets.network;

  console.log("stTokenContractAddress: ", stTokenContractAddress);
  console.log("liquidStakingAddress: ", liquidStakingAddress);
  const inviCoreContract = await deployInviCoreContract(stTokenContractAddress, liquidStakingAddress, network);
  console.log("deployed inviCore contract: ", inviCoreContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
