import { bfcTestAddress } from "../scripts/addresses/testAddresses/address.bfc";
import { evmosTestAddress } from "../scripts/addresses/testAddresses/address.evmos";
import { bnbTestAddress } from "../scripts/addresses/testAddresses/address.bnb";

export const getTestAddress = (network: string) => {
  if (network === "bifrost_testnet") {
    return bfcTestAddress.testnet;
  } else if (network === "bifrost_mainnet") {
    return bfcTestAddress.mainnet;
  } else if (network === "bnb_testnet") {
    return bnbTestAddress.testnet;
  } else if (network === "bnb_mainnet") {
    return bnbTestAddress.mainnet;
  } else if (network === "evmos_testnet") {
    return evmosTestAddress.testnet;
  } else if (network === "evmos_mainnet") {
    return evmosTestAddress.mainnet;
  }
};
