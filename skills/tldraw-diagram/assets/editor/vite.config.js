import { defineConfig } from 'vite'

export default defineConfig({
  // Asset ?url imports must go through Vite's asset pipeline, not dependency prebundling.
  optimizeDeps: { exclude: ['@tldraw/assets'] },
})
