import React from 'react';

const Pages = {
  Dashboard: React.lazy(() => import('./dashboard')),
  Landing: React.lazy(() => import('./landing')),
  Login: React.lazy(() => import('./login')),
  Register: React.lazy(() => import('./register')),
  Verification: React.lazy(() => import('./verification')),
};

export default Pages;
