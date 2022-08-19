// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'solitaire-engine',
            // the proper extensions will be added
            fileName: 'solitaire-engine'
        }
    }
});
