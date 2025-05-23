import { fallback, http } from "viem";
import type { FallbackTransport } from "viem";
import { LENS_MAINNET_RPCS, LENS_TESTNET_RPCS } from "@togi/data/rpcs";

const getRpc = ({ mainnet }: { mainnet: boolean }): FallbackTransport => {
  if (mainnet) {
    return fallback(
      LENS_MAINNET_RPCS.map((rpc) => http(rpc, { batch: { batchSize: 10 } }))
    );
  }
  return fallback(
    LENS_TESTNET_RPCS.map((rpc) => http(rpc, { batch: { batchSize: 10 } }))
  );
};

export default getRpc;
