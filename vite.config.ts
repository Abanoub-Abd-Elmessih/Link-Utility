import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set the base URL for the app
  build: {
    outDir: 'dist', // Specify the output directory
  },
  server: {
    open: true, // Automatically open the app in the default browser
  },
});
