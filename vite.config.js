import { defineConfig, loadEnv } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  const gaScript = env.VITE_GA_MEASUREMENT_ID
    ? `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${env.VITE_GA_MEASUREMENT_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${env.VITE_GA_MEASUREMENT_ID}');
    </script>`
    : '<!-- Google Analytics not configured -->';
  
  return {
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
    // Multi-page app configuration
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        about: resolve(__dirname, 'public/about.html'),
      },
    },
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
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace('<!-- GA_SCRIPT -->', gaScript);
      },
    },
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
  };
});
