import { BASE } from "./base";
import { BSC } from "./bsc";
import { OP } from "./op";
import { POLYGON } from "./polygon";
import { FANTOM } from "./fantom";
import { AVALANCHE } from "./avalanche";
import { MOONBEAM } from "./moonbeam";

export type TEnabledChain = typeof CHAINS_ENABLED[number];
export type TConfig = Record<TEnabledChain, string[]>;


export const CHAINS_ENABLED = [
    "bsc",
    "base",
    "polygon",
    "optimism",
    "fantom",
    "avalanche",
    "moonbeam"
] as const


export const config: TConfig = {
    bsc: BSC,
    base: BASE,
    optimism: OP,
    polygon: POLYGON,
    fantom: FANTOM,
    avalanche: AVALANCHE,
    moonbeam: MOONBEAM
} 