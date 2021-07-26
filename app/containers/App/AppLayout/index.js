/* eslint-disable react/prop-types */
import React from 'react';
import { Layout } from 'antd';

import useStyles from './styles';
import AppHeader from './AppHeader';
import AppContent from './AppContent';

const AppLayout = ({ children }) => {
	const classes = useStyles();

	return (
		<Layout className={`${classes.appLayout} layout app-layout-container`}>
			<AppHeader />
			<AppContent>{children}</AppContent>
		</Layout>
	);
};

export default AppLayout;
