import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
       '/api': { // Ajusta la ruta según las URLs de tu backend
            target: 'https://chatbot-backend.vercel.app',
          changeOrigin: true,
          secure: false,
        },

    },
  },
});