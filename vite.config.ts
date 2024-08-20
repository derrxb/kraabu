import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';
import path, { resolve } from 'path';

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
    noExternal: [
      /^\@radix-ui/,
      'pino',
      'pino-pretty',
      '@logtail/pino',
      /^pino$/,
      /^pino\-pretty$/,
      /^@logtail\/pino$/,
      'colorette',
    ],
  },
  plugins: [remix({ presets: [vercelPreset()] }), tsconfigPaths()],
  resolve: {
    alias: {
      'msw/native': resolve(resolve(__dirname, './node_modules/msw/lib/native/index.mjs')),
      'msw/browser': resolve(resolve(__dirname, './node_modules/msw/lib/browser/index.mjs')),
    },
  },
  build: {
    target: 'esnext',
  },
  esbuild: {
    supported: {
      'top-level-await': true, //browsers can handle top-level-await features
    },
  },
});
