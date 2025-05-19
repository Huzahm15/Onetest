import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', //  <-- TRY THIS FIRST
  // or base: '/', // <--- THEN TRY THIS if './' doesn't work
})
