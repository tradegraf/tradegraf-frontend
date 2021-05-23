import { LazyExoticComponent } from 'react';

import pages from '../pages';
import {
  RedirectContainer,
  RedirectPrivateContainer,
  RedirectProfile,
} from '../containers/Redirect';

export type RouteItem = {
  name: string;
  path: string;
  isExact: boolean;
  isPrivate: boolean;
  component: LazyExoticComponent<React.FC> | React.FC;
};

export type RoutesArr = RouteItem[];

const ROUTE_LIST: RoutesArr = [
  {
    name: 'LANDING',
    path: '/',
    component: pages.Landing,
    isExact: true,
    isPrivate: false,
  },
  {
    name: 'LOGIN',
    path: '/login',
    component: pages.Login,
    isExact: true,
    isPrivate: false,
  },
  {
    name: 'REGISTER',
    path: '/register',
    component: pages.Register,
    isExact: true,
    isPrivate: false,
  },
  {
    name: 'VERIFICATION',
    path: '/verification',
    component: pages.Verification,
    isExact: true,
    isPrivate: false,
  },
  {
    name: 'DASHBOARD',
    path: '/dashboard',
    component: pages.Dashboard,
    isExact: true,
    isPrivate: true,
  },
  {
    name: 'PROFILE_OVERVIEW',
    path: '/profile/overview',
    component: pages.Profile.Overview,
    isExact: true,
    isPrivate: true,
  },
  {
    name: 'PROFILE',
    path: '/profile',
    component: RedirectProfile,
    isExact: true,
    isPrivate: true,
  },

  /* KEEP 404 AT THE END */
  {
    name: '404',
    path: '*',
    component: RedirectContainer,
    isExact: true,
    isPrivate: false,
  },
  {
    name: '404-Private',
    path: '*',
    component: RedirectPrivateContainer,
    isExact: true,
    isPrivate: true,
  },
];

const routes = new Map();

ROUTE_LIST.forEach(route => {
  routes.set(route.name, route);
});

export const INITIAL_ROUTE: string = routes.get('DASHBOARD').path;

export default routes;
