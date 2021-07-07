import { createUseStyles } from 'react-jss';

export default createUseStyles({
	container: {
		width: '100%',
		margin: '0',
	},
	submitButtonContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	button: {
		minWidth: '100%',
		borderRadius: '8px',
	},
	input: {
		// height: '3rem',
		borderRadius: '8px',
		marginTop: '1rem',
		marginBottom: '1rem !important',
		fontSize: '1rem',
	},
	marginReset: {
		margin: '0',
	},
	inputIcon: {
		margin: '0 8px 0 2px',
	},
	submitButton: {
		margin: '1rem 0 0',
	},
	approval: {
		fontSize: '12px',
	},
});
