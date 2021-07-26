import { createUseStyles } from 'react-jss';

export default createUseStyles({
	itemWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '1rem',
		backgroundColor: '#f0f2f5',
		borderRadius: '8px',
		margin: '1rem 0',
	},
	leftWrapper: {
		display: 'flex',
	},
	leftWrapperInner: {
		display: 'flex',
		flexDirection: 'column',
	},
	rightWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		'@media (max-width: 470px)': {
			flexDirection: 'column',
			alignItems: 'flex-end',
		},
	},
	nameContainer: {
		display: 'flex',
		margin: '0 0 .5rem',
		'@media (max-width: 470px)': {
			flexDirection: 'column',
			margin: '0',
		},
	},
	connectionStatusTag: {
		margin: '0 8px',
		'@media (max-width: 470px)': {
			margin: '0',
		},
	},
	connectionName: {
		fontWeight: 600,
	},
	icon: {
		display: 'flex',
		alignSelf: 'center',
		height: 'fit-content',
		margin: '0 1rem 0 0',
		padding: '.5rem',
		backgroundColor: '#ffffff',
		borderRadius: '8px',
	},
});
