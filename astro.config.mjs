import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

export default defineConfig({
    devToolbar: {
        enabled: false,
    },
    vite: {
        plugins: [tailwindcss()],
    },
    site: 'https://www.solidcat.dev',
    integrations: [sitemap(), react()],
});