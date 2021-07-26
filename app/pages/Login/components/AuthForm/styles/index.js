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
		borderRadius: '8px',
		marginTop: '1rem',
		fontSize: '1rem !important',
		padding: '4px',
	},
	inputIcon: {
		margin: '0 6px 0 8px',
	},
	marginReset: {
		margin: '0',
	},
	submitButton: {
		margin: '1rem 0 0',
	},
	approval: {
		fontSize: '12px',
		marginTop: '1rem',
	},
});
