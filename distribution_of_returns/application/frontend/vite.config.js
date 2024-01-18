import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '..', 'static'),
    rollupOptions: {
      output: {
        entryFileNames: 'application.js', // JS output file name
        chunkFileNames: 'chunks/[name].js', // For chunked files, if any
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'styles.css'; // CSS output file name
          }
          return 'assets/[name][extname]'; // Other assets
        },
      },
    },
  },
});
