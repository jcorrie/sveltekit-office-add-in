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
					50: '#f9f5ff',
					100: '#f2e8ff',
					200: '#e5d0ff',
					300: '#d4aaff',
					400: '#bf80ff',
					500: '#a64dff',
					600: '#853bcc',
					700: '#662e99',
					800: '#4a2166',
					900: '#2f1533',
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
