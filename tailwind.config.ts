import type { Config } from "tailwindcss";
import formsPlugin from '@tailwindcss/forms';

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'selected': 'rgb(var(--selected-rgb))',
				'bgColor': 'rgb(var(--background-rgb))'
			},
			fontFamily: {
				'display': ['Grenze_Gotisch']
			},
			keyframes: {
				turnOver: {
					'from': {
						transform: 'rotate(0deg)'
					},
					'to': {
						transform: 'rotate(180deg)'
					}
				}
			},
			animation: {
				turnOver: 'turnOver 1s'
			}
		}
	},
	plugins: [formsPlugin],
};
export default config;
