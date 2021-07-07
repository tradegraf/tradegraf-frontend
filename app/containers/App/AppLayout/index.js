import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import useStyles from './styles';
import AppHeader from './AppHeader';
import AppContent from './AppContent';

const AppLayout = ({ children }) => {
	const classes = useStyles();

	return (
		<Layout className={[classes.appLayout, 'layout app-layout-container']}>
			<AppHeader />
			<AppContent>{children}</AppContent>
		</Layout>
	);
};

AppLayout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AppLayout;
