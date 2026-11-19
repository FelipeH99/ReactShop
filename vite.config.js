import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// Vercel serves the app at /. GitHub Pages passes its subpath at build time.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
