import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // Dev-only proxy to avoid Loops CORS when running locally
      '/api/loops-newsletter': {
        target: 'https://app.loops.so',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/api\/loops-newsletter/, '/api/newsletter-form'),
      },
    },
  },
})
