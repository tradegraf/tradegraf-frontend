import React, { FC } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import { RedirectProfile } from '../Redirect';
import pages from '../../pages';

const ProfileRoutes: FC = () => {
  const { url } = useRouteMatch();
  const basePath = url.split('/').filter(item => item)[0];
  return (
    <>
      <Route path={`/${basePath}/overview`} component={pages.Profile.Overview} exact />
      <Route path={`/${basePath}/api`} component={pages.Profile.Api} exact />
      <Route path={`/${basePath}/`} component={RedirectProfile} />
    </>
  );
};

export default ProfileRoutes;
