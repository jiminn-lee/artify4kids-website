/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'artify-red': '#FD7C87',
				'artify-purple': '#7862D1',
				'artify-blue': '#64A3F5',
				'artify-green': '#95E481',
				'artify-yellow': '#FAEFA7'
			}
		}
	},
	plugins: []
};
