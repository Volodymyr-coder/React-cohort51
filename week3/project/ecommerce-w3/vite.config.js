import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// vite.config.js
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/',
  build: {
    outDir: 'dist'
  }
});
