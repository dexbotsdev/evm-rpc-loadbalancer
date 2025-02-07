import { BASE } from "./base";
import { BSC } from "./bsc";
import { OP } from "./op";
import { POLYGON } from "./polygon";
import { FANTOM } from "./fantom";
import { AVALANCHE } from "./avalanche";
import { MOONBEAM } from "./moonbeam";
import { ETH } from "./eth";
import { BITGERT } from "./bitgert";
import { HARMONY } from "./harmony";

export type TEnabledChain = typeof CHAINS_ENABLED[number];
export type TConfig = Record<TEnabledChain, string[]>;


export const CHAINS_ENABLED = [
    "bsc",
    "base",
    "polygon",
    "optimism",
    "fantom",
    "avalanche",
    "moonbeam",
    "eth",
    "bitgert",
    "harmony"
] as const


export const config: TConfig = {
    bsc: BSC,
    base: BASE,
    optimism: OP,
    polygon: POLYGON,
    fantom: FANTOM,
    avalanche: AVALANCHE,
    moonbeam: MOONBEAM,
    eth: ETH,
    bitgert: BITGERT,
    harmony: HARMONY,
} 