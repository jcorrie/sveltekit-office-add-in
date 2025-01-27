import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f3fcf7',
					100: '#e6f9ef',
					200: '#c4f1d8',
					300: '#9ee8bf',
					400: '#6fdda0',
					500: '#3dcd80',
					600: '#31a666',
					700: '#257f4d',
					800: '#195733',
					900: '#0e2f1a',
				},

				secondary: {
					50: '#fff8f2',
					100: '#ffeee6',
					200: '#ffd5c8',
					300: '#ffb399',
					400: '#ff8666',
					500: '#ff5633',
					600: '#cc4529',
					700: '#99351f',
					800: '#662415',
					900: '#33120a',
				},
			},
		},
	},

	plugins: [typography, forms],
} satisfies Config;
