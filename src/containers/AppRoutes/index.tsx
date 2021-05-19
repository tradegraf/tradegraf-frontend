import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import _ from 'lodash';

import routes from '../../shared/routes';
import { PrivateRoute, PublicRoute } from '../../utils/privateRoute';
import { userAtom } from '../../state/user/atoms';

export const AppRoutes: React.FC = () => {
  const [pathName, setPathName] = useState('');

  useEffect(() => {
    setPathName(getPageName(window.location.pathname) || 'DASHBOARD');
  }, []);

  const user = useRecoilValue(userAtom);

  const foundPage = routes.get(pathName);

  return foundPage ? (
    <PrivateRoute key={foundPage.name} page={foundPage} isAuthenticated={!_.isEmpty(user)} />
  ) : (
    <Redirect to={routes.get('DASHBOARD').path} />
  );
};

export const PublicRoutes: React.FC = ({ location }) => {
  const [pathName, setPathName] = useState<string>('');

  useEffect(() => {
    setPathName(getPageName(location.pathname) || 'LANDING');
  }, [location]);

  const user = useRecoilValue(userAtom);

  const foundPage = routes.get(pathName);

  return foundPage ? (
    <PublicRoute key={foundPage.name} page={foundPage} isAuthenticated={!_.isEmpty(user)} />
  ) : (
    <Redirect to={routes.get('LANDING').path} />
  );
};

const getPageName = (path: string): string | null => {
  const pathsList = path.split('/').filter(elem => elem !== '');

  console.log(pathsList);
  return pathsList.length ? pathsList[0].toUpperCase() : null;
};
