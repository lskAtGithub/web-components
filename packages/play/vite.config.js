import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@w-components': resolve(__dirname, '../components/src')
    }
  },
  server: {
    open: true, // 自动打开浏览器
    port: 5173
  }
});
