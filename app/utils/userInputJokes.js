/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { HiddenEasterEgg } from 'react-hidden-easter-egg';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
	container: {
		display: 'flex',
		position: 'flex',
		top: '8px',
		right: '16px',
		zIndex: '25',
	},
	margin: {
		marginLeft: '1rem',
	},
}));

export const UserInputForJokes = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.margin}>
				<HiddenEasterEgg resetEggMs={10000} code={['b', 'e', 'r', 'k', 'a', 'y']} codeMode="KEY">
					🐒
				</HiddenEasterEgg>
			</div>
			<div className={classes.margin}>
				<HiddenEasterEgg resetEggMs={10000} code={['l', 'o', 'a', 'r', 'd']} codeMode="KEY">
					👑
				</HiddenEasterEgg>
			</div>
			<div className={classes.margin}>
				<HiddenEasterEgg resetEggMs={10000} code={['d', 'o', 'g', 'e']} codeMode="KEY">
					🚀
				</HiddenEasterEgg>
			</div>
		</div>
	);
};
