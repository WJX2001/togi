import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import tailwindcss from '@tailwindcss/vite'
import EnvironmentPlugin from "vite-plugin-environment";
// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), tailwindcss(), EnvironmentPlugin(["NEXT_PUBLIC_LENS_NETWORK"])],
})
