import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/e-plantShopping/',  // Ensure this is set to the base path where the app is hosted
  plugins: [react()],
})
