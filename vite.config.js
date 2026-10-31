import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        support: resolve(import.meta.dirname, 'support.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
      },
    },
  },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.js'],
  },
});
