import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({mode}) => {
  const isGithub = mode === 'github';

  return {
    plugins: [react()],
    base: isGithub ? '/Portfolio/' : '/',
    server: {
      open: true,
      port: 30001,
    },
  };
});
