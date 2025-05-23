import { HELLO_WORLD } from '@togi/config'
import { chains } from "@lens-chain/sdk/viem";
import getEnvConfig from './utils/getEnvConfig';
import LensEndpoint from './lens-endpoints';



// Lens and Hey Env Config 
export const LENS_NETWORK = process.env.NEXT_PUBLIC_LENS_NETWORK || "mainnet";
export const LENS_API_URL = getEnvConfig().lensApiEndpoint;
// export const IS_MAINNET = 
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
export const IS_MAINNET = LENS_API_URL === LensEndpoint.Mainnet;
export const CHAIN = IS_MAINNET ? chains.mainnet : chains.testnet;

// URLS
export const STATIC_ASSETS_URL = 'https://static.hey.xyz'
export const STATIC_IMAGES_URL = `${STATIC_ASSETS_URL}/images`
export const LENS_MEDIA_SNAPSHOT_URL = "https://ik.imagekit.io/lens";
export const PLACEHOLDER_IMAGE = `${STATIC_IMAGES_URL}/placeholder.webp`
export const DEFAULT_AVATAR = `${STATIC_IMAGES_URL}/default.png`;


// Storage
export const STORAGE_NODE_URL = "https://api.grove.storage";
export const IPFS_GATEWAY = "https://gw.ipfs-lens.dev/ipfs";

// Tokens / Keys
export const WALLETCONNECT_PROJECT_ID = "cd542acc70c2b548030f9901a52e70c8";

// Named transforms for ImageKit
export const AVATAR_SMALL = "tr:w-100,h-100";
export const LENS_NAMESPACE = "lens/";

console.log(HELLO_WORLD)
