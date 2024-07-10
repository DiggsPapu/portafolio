import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portafolio/',
  plugins: [react()],
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
