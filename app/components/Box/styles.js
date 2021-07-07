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
		flexDirection: (props) => props.direction,
		margin: '0 2rem',
		width: '100%',
		padding: '1.5rem',
		backgroundColor: '#111111',
		borderRadius: '1rem',
		boxShadow: '0 6px 9px 10px rgb(15 5 15 / 7%)',
		'@media (min-width: 576px)': {
			width: '22rem',
		},
	},
});
