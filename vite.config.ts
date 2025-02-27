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
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create a chunk for each page
          if (id.includes('/src/pages/')) {
            const pageName = id.split('/pages/')[1].split('.')[0].toLowerCase();
            return `page-${pageName}`;
          }
          
          // Create a chunk for React and related packages
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/scheduler')) {
            return 'react-vendor';
          }
          
          // Create a chunk for React Router
          if (id.includes('node_modules/react-router') || 
              id.includes('node_modules/react-router-dom') ||
              id.includes('node_modules/@remix-run')) {
            return 'router-vendor';
          }
          
          // Create a chunk for UI components
          if (id.includes('node_modules/@radix-ui')) {
            return 'ui-vendor';
          }
          
          // Create a chunk for utility libraries
          if (id.includes('node_modules/lucide-react') || 
              id.includes('node_modules/clsx') ||
              id.includes('node_modules/tailwind-merge')) {
            return 'utils-vendor';
          }
          
          // Create a chunk for form-related libraries
          if (id.includes('node_modules/react-hook-form') || 
              id.includes('node_modules/@hookform') ||
              id.includes('node_modules/zod')) {
            return 'form-vendor';
          }
          
          // Create a chunk for all other node_modules
          if (id.includes('node_modules')) {
            return 'vendors';
          }
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
