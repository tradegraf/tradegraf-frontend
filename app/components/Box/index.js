import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const Box = ({ children, ...properties }) => {
	const classes = useStyles(properties);

	return (
		<div className={classes.container}>
			<div className={classes.innerContainer}>{children}</div>
		</div>
	);
};

Box.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	props: {
		direction: PropTypes.oneOf(['row', 'column']).isRequired,
	}.isRequired,
};

export default Box;
