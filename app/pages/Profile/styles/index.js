import { createUseStyles } from 'react-jss';

export default createUseStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '20rem',
		margin: 'auto',
		padding: '1rem 1.125rem',
		backgroundColor: '#111111',
		borderRadius: '.75rem',
		'@media (min-width: 576px)': {
			padding: '1.5rem 2rem',
		},
	},
});
