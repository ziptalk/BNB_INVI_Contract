//======= test Addresses =======//
import { bnbTestAddress } from "./addresses/testAddresses/address.bnb";
import { evmosTestAddress } from "./addresses/testAddresses/address.evmos";
import { bfcTestAddress } from "./addresses/testAddresses/address.bfc";

//======= live Addresses =======//
import { bfcLiveAddress } from "./addresses/liveAddresses/address.bfc";
import { evmosLiveAddress } from "./addresses/liveAddresses/address.evmos";
import { bnbLiveAddress } from "./addresses/liveAddresses/address.bnb";

const contractLists = [
  "InviCore", // 0
  "LiquidityProviderPool", // 1
  "StakeNFT", // 2
  "InviTokenStake", // 3
  "LendingPool", // 4
  "PriceManager", // 5
  "InviToken", // 6
  "ILPToken", // 7
  "InviSwapPool", // 8
];

export const targets = {
  //========= deploy contract =========//
  network: "BIFROST",
  networkType: "MAINNET",

  // ======== upgrade Addresses ========//
  upgradingContract: contractLists[2],
  upgradingContractAddress: bnbTestAddress.testnet.stakeNFTContractAddress,

  // ======== test Addresses ========//
  testNetworkType: "MAINNET",
};
