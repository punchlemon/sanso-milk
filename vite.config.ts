import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
    }
  },
  build: {
    sourcemap: true,
    // 文字列ではなく、有効な値（boolean または 'terser' | 'esbuild'）を使用
    minify: 'terser',
    terserOptions: {
      compress: {
        evaluate: false
      }
    }
  }
});
