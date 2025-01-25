import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as devCerts from "office-addin-dev-certs";
import { resolve } from "node:path";
import { createHtmlPlugin } from "vite-plugin-html";

async function getHttpsOptions() {
	const httpsOptions = await devCerts.getHttpsServerOptions();
	return {
		ca: httpsOptions.ca,
		key: httpsOptions.key,
		cert: httpsOptions.cert,
	};
}


export default defineConfig({
	plugins: [sveltekit(),
	createHtmlPlugin({
		minify: true,
		pages: [
			{
				entry: "src/app.d.ts",
				filename: "index.html", // updated this to index.html now we serve the taskpane.html from https:localhost:3000/
				template: "./taskpane.html",
				injectOptions: {
					data: {
						injectScript: `<script src="./main.js"></script>`,
					},
				},
			},
			{
				entry: "src/commands.ts",
				filename: "commands.html",
				template: "commands.html",
				injectOptions: {
					data: {
						injectScript: `<script src="./commands.js"></script>`,
					},
				},
			},
		],
	}),
	],

	server: {
		https: await getHttpsOptions(),
		port: 3000,
		strictPort: false,
		open: "/", // opens the correct /taskpane.html when opening browser to view in web
	},
	preview: {
		https: await getHttpsOptions(),
		port: 3000,
		strictPort: false,
		open: "./taskpane.html", // opens the correct /taskpane.html when opening browser to view in web
	},
});


