import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';

import { INITIAL_ROUTE } from '@app/shared/routes';
import useStyles from './styles';
import AppHeader from './AppHeader';
import AppContent from './AppContent';

const AppLayout = () => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  return (
    <Layout className={classes.appLayout}>
      <Layout className="site-layout">
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
