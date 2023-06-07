/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ['emerald'],
		darkTheme: false, // name of one of the included themes for dark mode
	},
}
