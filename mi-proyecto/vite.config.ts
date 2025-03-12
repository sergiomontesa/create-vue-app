import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define el alias '@' para la carpeta 'src'
    },
  },
  server: {
    open: true,
    host: 'localhost',
    port: 8888,
    proxy: {},
  },
})
