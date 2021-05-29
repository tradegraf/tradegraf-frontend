/* eslint-disable import/no-cycle */
import React from 'react';

const Pages = {
  Dashboard: React.lazy(() => import('./dashboard')),
  Landing: React.lazy(() => import('./landing')),
  Login: React.lazy(() => import('./login')),
  Register: React.lazy(() => import('./register')),
  Verification: React.lazy(() => import('./verification')),
  Profile: {
    Overview: React.lazy(() => import('./profile/overview')),
    Api: React.lazy(() => import('./profile/api')),
    Default: React.lazy(() => import('./profile')),
  },
};

export default Pages;
