import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react_tabs-js': path.resolve(__dirname, './src/mock-tabs.tsx'),
    },
  },
})