const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			gray: {
				...colors.trueGray,
				800: '#1c1c1c',
			},
			blue: colors.blue,
			red: colors.red,
			pink: colors.fuchsia,
			green: colors.green,
			yellow: colors.yellow,
		},
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['checked'],
			borderColor: ['checked'],
			inset: ['checked'],
			zIndex: ['hover', 'active'],
		},
	},
	plugins: [],
	future: {
		purgeLayersByDefault: true,
	},
};
