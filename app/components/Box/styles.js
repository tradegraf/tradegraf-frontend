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
		backgroundColor: '#1e1e1e',
		borderRadius: '1rem',
		boxShadow: '0 0 12px 0 rgb(0 0 0 / 10%), 0 10px 30px 0 rgb(0 0 0 / 20%)',
		'@media (min-width: 576px)': {
			width: '22rem',
		},
	},
});
