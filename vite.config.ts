import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as devCerts from 'office-addin-dev-certs';
import mkcert from 'vite-plugin-mkcert'
import { createHtmlPlugin } from 'vite-plugin-html';

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
		sveltekit(), mkcert(),

		createHtmlPlugin({
			minify: true,
			pages: [
				{
					entry: 'src/app.d.ts',
					filename: 'index.html', // updated this to index.html now we serve the taskpane.html from https:localhost:3000/
					template: '.',
					injectOptions: {
						data: {
							injectScript: `<script src="./main.js"></script>`
						}
					}
				},
				{
					entry: 'src/commands.ts',
					filename: 'commands.html',
					template: 'commands.html',
					injectOptions: {
						data: {
							injectScript: `<script src="./commands.js"></script>`
						}
					}
				}
			]
		})
	],

	server: {
		https: await getHttpsOptions(),
		port: 3000,
		strictPort: false,
		open: '/', // opens the correct /taskpane.html when opening browser to view in web
		fs: {
			allow: ['./static/custom_functions', "./wasm"]
		}
	},
	preview: {
		https: await getHttpsOptions(),
		port: 3000,
		strictPort: false,
		open: '.' // opens the correct /taskpane.html when opening browser to view in web
	}
});
