/* eslint-disable react/prop-types */
import React from 'react';
import { Layout } from 'antd';

import useStyles from './styles';

const { Content } = Layout;

const AppContent = ({ children }) => {
	const classes = useStyles();

	return <Content className={classes.contentContainer}>{children}</Content>;
};

export default AppContent;
