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
  // This configuration handles SPA redirects
  preview: {
    port: 4173,
  },
  build: {
    outDir: "dist",
    minify: 'terser',
    sourcemap: false, // Disable sourcemaps in production for better performance
    target: 'es2020', // Target modern browsers
    modulePreload: {
      polyfill: false, // Disable modulepreload polyfill
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 3, // More aggressive optimization
        ecma: 2020, // Use modern JS features for better compression
        unused: true, // Remove unused variables
        dead_code: true, // Remove dead code
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
