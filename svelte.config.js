import adapter from '@sveltejs/adapter-node';
import { sveltePreprocess } from 'svelte-preprocess'
/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess({
        typescript: true,
        // Add other preprocessors if needed
    }),

    kit: {
        adapter: adapter(),
        // Other SvelteKit configuration options
    }
};

export default config;