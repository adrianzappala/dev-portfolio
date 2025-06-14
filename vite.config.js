import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/dev-portfolio/', // 👈 ESTA LÍNEA ES FUNDAMENTAL
  plugins: [react(), tailwindcss()],
})
