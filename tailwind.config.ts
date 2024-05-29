import type { Config } from "tailwindcss";
import formsPlugin from '@tailwindcss/forms';

const config: Config = {
	darkMode: 'selector',
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'text': "#000000",
				'background': "#ADD8E6",
				'active': "#2563EB",
				'title': '#000000',
				"cardBG": '#E3FAFF',
				'border': '#000000',
				'genreBarBG': '#FFFFFF',
				'themeTogglerBG': '#FFFFFF',
				'specialIcons': '#86198F',
				'button': '#FFFFFF',
				'loading': '#BFDBFE',

				'darktext': "#EEEFF0",
				'darkbackground': "#090A29",
				'darkactive': "#BDBFFD",
				'darkcardBG': '#131329',
				'darktitle': '#0EA5E9',
				'darkborder': '#46477E',
				'darkgenreBarBG': '#202253',
				'darkthemeTogglerBG': '#1D1D29',
				'darkspecialIcons': '#EAB308',
				'darkbutton': '#202253',
				'darkloading': '#1E293B',

				'vkButtonBG': '#0077FF',
				'darkvkButtonBG': '#000000',
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
