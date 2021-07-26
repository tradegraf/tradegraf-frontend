import { createUseStyles } from 'react-jss';

export default createUseStyles({
	warningMessageContainer: {
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '360px',
	},
	fullWidth: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	addExchangeRow: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: '100%',
		margin: '0 0 1rem',
	},
});
