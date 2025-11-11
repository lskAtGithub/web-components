import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: __dirname,
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
