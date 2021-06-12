import { createUseStyles } from 'react-jss';

export default createUseStyles(() => ({
	container: {
		position: 'fixed',
		top: 0,
		left: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,.3)',
		backdropFilter: 'blur(4px)',
		zIndex: 999,
	},
}));
