import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Ensures assets load from root domain (/assets/...) regardless of URL depth like /posts/2
  base: '/', 
  build: {
    sourcemap: true,
    minify: false, // Disables minification so the browser console shows readable component names
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        // Use container service name for Docker networking, fallback to localhost for local dev
        target: process.env.VITE_BACKEND_URL || 'http://thoughtcanvas-backend:5000',
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
});