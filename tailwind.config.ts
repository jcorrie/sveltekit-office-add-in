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
					50: '#f2f6ff',
					100: '#e6edff',
					200: '#cddaff',
					300: '#a8bbff',
					400: '#7392ff',
					500: '#4068ff',
					600: '#3152cc',
					700: '#253f99',
					800: '#1a2c66',
					900: '#101933',
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
