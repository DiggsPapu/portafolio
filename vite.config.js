import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/portafolio',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Example: '@' points to 'src' folder
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@data': path.resolve(__dirname, './src/data'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  test: {
    setupFiles: './src/setUpTest.js',
    globals: true,
    environment: 'jsdom',
  },
  server: {
    host: '0.0.0.0',
    port: '3200',
  },
})
