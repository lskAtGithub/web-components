import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: __dirname,
  plugins: [tailwindcss()],
  server: {
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      '@packages': path.resolve(__dirname, '../packages')
    }
  }
});
