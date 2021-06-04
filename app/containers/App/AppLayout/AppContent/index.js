import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';

import routes, { INITIAL_ROUTE } from '@app/shared/routes';
import useStyles from './styles';
// import { Creators } from '@app/redux/actions/common';

const { Content } = Layout;

const AppContent = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(Creators.init());
  // }, [dispatch]);

  return (
    <Router>
      <Content>
        <Switch>
          {routes
            .filter((route) => route.isPrivate)
            .map((route) => {
              return route.component ? (
                <Route
                  key={route.key}
                  path={route.path}
                  exact={route.exact}
                  render={(propsParam) => {
                    return <route.component {...propsParam} />;
                  }}
                />
              ) : null;
            })}
          <Redirect to={INITIAL_ROUTE.path} />
        </Switch>
      </Content>
    </Router>
  );
};

export default AppContent;
