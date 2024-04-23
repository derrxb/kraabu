import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';

installGlobals();

export default defineConfig({
  test: {
    threads: false,
    coverage: {
      all: true,
    },
    environment: 'node',
    setupFiles: ['./test/setup.ts'],
  },
  ssr: {
    noExternal: /^\@radix-ui/,
  },
  plugins: [remix({ presets: [vercelPreset()] }), tsconfigPaths()],
});
