import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup-tests.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});
