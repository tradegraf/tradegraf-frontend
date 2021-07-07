import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Content } = Layout;

import useStyles from './styles';

const AppContent = ({ children }) => {
	const classes = useStyles();

	return <Content className={classes.contentContainer}>{children}</Content>;
};

AppContent.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AppContent;
