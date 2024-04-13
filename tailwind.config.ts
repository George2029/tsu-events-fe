import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			'display': ['Grenze_Gotisch']
		}
	},
	plugins: [],
};
export default config;
