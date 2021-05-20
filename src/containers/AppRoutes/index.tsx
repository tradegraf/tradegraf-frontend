import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes, { RoutesArr } from '../../shared/routes';
import { PageLoader } from '../PageLoader';

export const AppRoutes: React.FC = () => {
  const appRoutes: RoutesArr = [];
  routes.forEach(route => appRoutes.push(route));

  return (
    <Switch>
      {appRoutes
        .filter(route => route.isPrivate)
        .map(({ name, path, isExact, component: Component }) => (
          <Route
            key={name}
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
        ))}
    </Switch>
  );
};

export const PublicRoutes: React.FC = () => {
  const appRoutes: RoutesArr = [];
  routes.forEach(route => appRoutes.push(route));

  return (
    <Switch>
      {appRoutes
        .filter(route => !route.isPrivate)
        .map(({ name, path, isExact, component: Component }) => (
          // <PublicRoute key={route.name} page={route} isAuthenticated={!_.isEmpty(user)} />
          <Route
            key={name}
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
        ))}
    </Switch>
  );
};
