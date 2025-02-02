import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import mkcert from "vite-plugin-mkcert"
import * as devCerts from 'office-addin-dev-certs';

async function getHttpsOptions() {
    const httpsOptions = await devCerts.getHttpsServerOptions();
    return {
        ca: httpsOptions.ca,
        key: httpsOptions.key,
        cert: httpsOptions.cert
    };
}

export default defineConfig({
    plugins: [
        sveltekit(), mkcert()

    ],

    server: {
        https: await getHttpsOptions(),
        port: 3000,
        strictPort: false,
        open: '.', // opens the correct /taskpane.html when opening browser to view in web
        fs: {
            allow: ['./static/custom_functions', "./static/wasm"]
        }
    },
    preview: {
        https: await getHttpsOptions(),
        port: 3000,
        strictPort: false,
        open: '.' // opens the correct /taskpane.html when opening browser to view in web
    }
});