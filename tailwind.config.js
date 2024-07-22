/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'a-black': '#212020',
				'a-grey': '#454343',
				'a-red': '#FD7C87',
				'a-red-hover': '#f05d6a',
				'a-red-bg': '#FFF0F1',
				'a-purple': '#7862D1',
				'a-purple-hover': '#6249c4',
				'a-purple-bg': '#F5F3FC',
				'a-blue': '#64A3F5',
				'a-blue-hover': '#488de8',
				'a-blue-bg': '#F1F6FE',
				'a-green': '#95E481',
				'a-green-hover': '#7bd665',
				'a-green-bg': '#F4FCF2',
				'a-yellow': '#FAEFA7',
				'a-yellow-hover': '#eddf87',
				'a-yellow-bg': '#FEFCF1'
			}
		}
	},
	plugins: []
};
