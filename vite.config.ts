import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    // 開発中にHTTPSをサポートする場合はここでコメントを解除
    // https: true,
    headers: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://*.stripe.com 'unsafe-eval';
        script-src-elem 'self' 'unsafe-inline' https://*.stripe.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: blob:;
        font-src 'self';
        connect-src 'self' https://*.stripe.com;
        frame-src 'self' https://*.stripe.com;
      `.replace(/\s+/g, ' ').trim()
    }
  },
  build: {
    sourcemap: true,
    // Ensure Vite doesn't use eval in production builds
    minify: 'terser',
    terserOptions: {
      compress: {
        // Disable eval
        evaluate: false
      }
    }
  }
}))
