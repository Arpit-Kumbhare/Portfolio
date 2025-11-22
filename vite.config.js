import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  server: { 
    open: true,
    port: 30001, 
    },
});
