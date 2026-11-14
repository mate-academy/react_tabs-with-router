
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build'
    ? '/react_tabs-with-router/'
    : '/',
  plugins: [react()],
}));
