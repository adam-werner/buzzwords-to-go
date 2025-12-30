import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

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

  // Plugins
  plugins: [
    viteImagemin({
      // PNG optimization
      optipng: {
        optimizationLevel: 7,
      },
      // JPEG optimization
      mozjpeg: {
        quality: 80,
      },
      // PNG compression with pngquant
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      // SVG optimization
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
});
