/* eslint-disable no-dupe-keys */
import { createUseStyles } from 'react-jss';

export default createUseStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		width: '100vw',
		minHeight: '100vh' /* Fallback for browsers that do not support Custom Properties */,
		minHeight: 'calc(var(--vh, 1vh) * 100)',
	},
});
