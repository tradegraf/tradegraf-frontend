import { createUseStyles } from 'react-jss';

export default createUseStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0 !important',
	},
	innerContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: (properties) => properties.direction,
		margin: '0 2rem',
		width: '100%',
		padding: '1.5rem',
		backgroundColor: '#ffffff',
		borderRadius: '1rem',
		'@media (min-width: 576px)': {
			width: '22rem',
		},
	},
});
