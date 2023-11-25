// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      exclude: [
        'src/main.tsx',
        'src/types.ts',
        '.eslintrc.cjs',
        'src/vite-env.d.ts',
        'src/components/characterData/characterData.tsx',
        'src/reducers/detailsReducer.ts',
      ],
    },
  },
});
