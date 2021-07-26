/* eslint-disable no-dupe-keys */
import { createUseStyles } from 'react-jss';

export default createUseStyles({
	center: {
		display: 'flex',
		justifyContent: 'center',
		width: '100vw',
		minHeight: '100vh' /* Fallback for browsers that do not support Custom Properties */,
		minHeight: 'calc(var(--vh, 1vh) * 100)',
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
	title: {
		fontSize: '1.3rem !important',
	},
	marginReset: {
		margin: '0 !important',
	},
});
