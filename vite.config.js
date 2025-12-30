import { defineConfig } from 'vite';

export default defineConfig({
  // Use public/ as the root directory
  root: 'public',
  
  // Build output to dist/ at project root
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    // Generate source maps for debugging
    sourcemap: true,
    // Minify for production
    minify: 'esbuild',
  },
  
  // Dev server config
  server: {
    port: 8080,
    open: true,
  },
  
  // Preview server (for testing production build locally)
  preview: {
    port: 8080,
  },
});
