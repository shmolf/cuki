import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/cuki.ts',
      name: 'cuki',
      formats: ['es', 'umd'],
      fileName: (format) => (format === 'es' ? 'cuki.js' : 'cuki.umd.js'),
    },
    rollupOptions: {
      // The library intentionally provides both named exports and a default bundle object
      output: { exports: 'named' },
    },
  },
  test: {
    environment: 'jsdom',
    environmentOptions: {
      // Cuki defaults to `secure`, and jsdom only accepts secure cookies over https
      jsdom: { url: 'https://localhost/' },
    },
  },
});
