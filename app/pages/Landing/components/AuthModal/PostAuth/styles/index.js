import { createUseStyles } from 'react-jss';

export default createUseStyles(() => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		margin: '1rem 0',
	},
	information: {
		fontSize: '1rem',
	},
	widthFull: {
		width: '100%',
	},
	providerLink: {
		color: '#5a7ce6 !important',
	},
}));
