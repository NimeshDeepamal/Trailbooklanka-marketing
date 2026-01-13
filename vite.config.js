import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['clsx'], // <-- Helps with resolving from nested deps
  },
  build: {
    rollupOptions: {
      external: ['@tabler/icons-react']
    }
  }
})
