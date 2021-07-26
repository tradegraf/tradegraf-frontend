import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
	appHeader: { color: '#ffffff', background: 'transparent' },
	menuIcon: {
		display: 'flex',
		alignItems: 'center',
		height: 40,
		color: '#ffffff',
		fontSize: 16,
		cursor: 'pointer',
		transition: 'color 0.3s',
		'&:hover': { color: theme.color.primary },
	},
	countryFlag: { marginLeft: 20 },
	userMenu: {
		lineHeight: '32px',
		margin: {
			top: 1,
			right: 8,
			left: 2,
		},
	},
	userButton: {
		minWidth: '24px !important',
		height: 24,
		padding: {
			top: 3,
			bottom: 3,
		},
		'& span': { fontSize: 10, display: 'flex', justifyContent: 'center' },
	},
}));
