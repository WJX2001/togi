import { HELLO_WORLD } from '@togi/config'




// Lens and Hey Env Config 
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

// URLS
export const STATIC_ASSETS_URL = 'https://static.hey.xyz'
export const STATIC_IMAGES_URL = `${STATIC_ASSETS_URL}/images`
export const LENS_MEDIA_SNAPSHOT_URL = "https://ik.imagekit.io/lens";
export const PLACEHOLDER_IMAGE = `${STATIC_IMAGES_URL}/placeholder.webp`
export const DEFAULT_AVATAR = `${STATIC_IMAGES_URL}/default.png`;


// Storage
export const STORAGE_NODE_URL = "https://api.grove.storage";
export const IPFS_GATEWAY = "https://gw.ipfs-lens.dev/ipfs";


// Named transforms for ImageKit
export const AVATAR_SMALL = "tr:w-100,h-100";
export const LENS_NAMESPACE = "lens/";

console.log(HELLO_WORLD)
