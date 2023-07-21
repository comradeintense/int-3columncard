/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			md: '992px',
		},
		extend: {
			colors: {
				'bright-orange': 'hsl(31, 77%, 52%)',
				'dark-cyan': 'hsl(184, 100%, 22%)',
				'very-dark-cyan': 'hsl(179, 100%, 13%)',
				'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
				'very-light-gray': 'hsl(0, 0%, 95%)',
			},
			fontFamily: {
				'lexend-deca': ['Lexend Deca', 'sans-serif'],
				'big-shoulders': ['Big Shoulders Display', 'cursive'],
			},
		},
	},
	plugins: [],
};
