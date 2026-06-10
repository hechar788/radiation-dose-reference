import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    // BASE_PATH is set by the GitHub Pages workflow, local dev and builds serve from the root.
    base: process.env.BASE_PATH ?? '/',
    plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true }), react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            src: path.resolve(__dirname, './src'),
        },
    },
});
