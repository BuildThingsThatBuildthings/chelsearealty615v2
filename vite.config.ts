import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: false, // Set to true to automatically open the visualization after build
      gzipSize: true,
      brotliSize: true,
    }),
  ],
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
    minify: 'terser',
    sourcemap: false, // Disable sourcemaps in production for better performance
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 2, // Multiple passes for better optimization
      },
      mangle: {
        safari10: true,
        toplevel: true, // Better mangling
      },
      format: {
        comments: false,
        ecma: 2020, // Modern JS features
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-core': [
            'react', 
            'react-dom', 
            'scheduler',
            'react/jsx-runtime'
          ],
          'router': [
            'react-router', 
            'react-router-dom',
            '@remix-run/router'
          ],
          'ui-components': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-popover',
            '@radix-ui/react-slot'
          ],
          'forms': [
            'react-hook-form',
            '@hookform/resolvers'
          ],
          'icons': [
            'lucide-react'
          ]
        },
        // Optimize chunk size and reduce requests
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize asset size
    assetsInlineLimit: 4096, // 4kb - small assets will be inlined as base64
    cssCodeSplit: true,
    reportCompressedSize: true,
  },
  css: {
    postcss: './postcss.config.js',
    // Optimize CSS
    devSourcemap: true,
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-hook-form',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-toast',
    ],
    exclude: [], // Add packages that cause issues with pre-bundling
  },
});
