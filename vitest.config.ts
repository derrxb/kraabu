import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    threads: false,
    coverage: {
      all: true,
    },
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
  },
});
