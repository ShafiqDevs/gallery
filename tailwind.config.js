/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#070C16',
				secondary: '#172B51',
				icon: '#95B4F0',
				hover: '#11182F',
			},
		},
	},
	plugins: [],
};
