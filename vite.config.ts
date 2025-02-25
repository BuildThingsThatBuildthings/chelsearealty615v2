import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  // This configuration handles SPA redirects that were previously managed by Netlify
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: "dist",
  },
  css: {
    postcss: './postcss.config.js',
  }
});
