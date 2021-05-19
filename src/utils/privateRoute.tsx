import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import routes, { RouteItem } from '../shared/routes';

import { PageLoader } from '../containers/PageLoader';

interface IRouteProps {
  page: RouteItem;
  isAuthenticated: boolean;
}

export const PrivateRoute: React.FC<IRouteProps> = ({ page, isAuthenticated }) => {
  const { component: Component, isExact, path, isPrivate } = page;

  return isPrivate && isAuthenticated ? (
    <Route
      path={path}
      exact={isExact}
      render={() => {
        return (
          <PageLoader>
            <Component />
          </PageLoader>
        );
      }}
    />
  ) : (
    <Redirect to={routes.get('DASHBOARD').path} />
  );
};

export const PublicRoute: React.FC<IRouteProps> = ({ page, isAuthenticated }) => {
  const { component: Component, isExact, path, isPrivate } = page;

  return (
    <Route
      path={path}
      exact={isExact}
      render={() => {
        return !isPrivate && !isAuthenticated ? (
          <PageLoader>
            <Component />
          </PageLoader>
        ) : (
          <Redirect to={routes.get('DASHBOARD').path} />
        );
      }}
    />
  );
};
