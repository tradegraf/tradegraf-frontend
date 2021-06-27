import { createUseStyles } from 'react-jss';

export default createUseStyles(() => ({
	center: {
		display: 'flex',
		justifyContent: 'center',
		width: '100vw',
		height: '100vh',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: 'auto',
	},
	logo: {
		margin: '.315rem 0',
	},
	marginReset: {
		margin: '0 !important',
	},
}));
