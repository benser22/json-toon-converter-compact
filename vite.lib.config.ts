import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/lib/index.ts'),
      name: 'JsonToonConverter',
      fileName: 'json-toon-converter',
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
});
