import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    host: true, // or use '0.0.0.0'
    port: 5173,
  },
  // This is use for stop hash in assets
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]' // no hash
      }
    }
  }
});
