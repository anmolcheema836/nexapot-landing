import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/nexapot-landing/', // MUST match your exact GitHub repo name
  plugins: [react()],
});