import { defineConfig } from 'vite'
import tailwindcss from '@tailwind/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
})
