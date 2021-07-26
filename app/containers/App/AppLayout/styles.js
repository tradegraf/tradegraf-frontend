import { createUseStyles } from 'react-jss';

export default createUseStyles({
	appLayout: {
		minHeight: '100vh',
		padding: ' 0 3rem',
		margin: '0 12rem',
		'@media (max-width: 1200px)': {
			margin: '0 6rem',
		},
		'@media (max-width: 960px)': {
			margin: '0 2rem',
		},
		'@media (max-width: 576px)': {
			padding: '0 1rem',
			margin: '0',
		},
	},
});
