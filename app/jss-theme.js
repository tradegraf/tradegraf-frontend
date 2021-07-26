const primaryColor = '#0d41e1';

const theme = {
	color: {
		primary: primaryColor,
		disabledPrimary: '#9bb0f2',
		lightPrimary: '#5173db',
		lightGray: '#fafafa',
		edit: '#FFA726',
		error: '#e82527',
		disabled: 'rgba(0, 0, 0, 0.65)',
	},
	iconButton: {
		type1: {
			cursor: 'pointer',
			color: '#757575',
			fontSize: 24,
			'&:hover, &:active': { color: primaryColor },
		},
	},
};

export default theme;
