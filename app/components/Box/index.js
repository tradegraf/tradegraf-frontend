import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const Box = ({ children, ...props }) => {
	const classes = useStyles(props);

	return (
		<div className={classes.container}>
			<div className={classes.innerContainer}>{children}</div>
		</div>
	);
};

Box.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	props: {
		direction: PropTypes.oneOf(['row', 'column']).isRequired(),
	},
};

export default Box;
