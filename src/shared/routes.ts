import { LazyExoticComponent } from 'react';
import pages from '../pages';

export type RouteItem = {
  name: string;
  path: string;
  isExact: boolean;
  isPrivate: boolean;
  component: LazyExoticComponent<React.FC>;
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
    name: 'DASHBOARD',
    path: '/dashboard',
    component: pages.Dashboard,
    isExact: true,
    isPrivate: true,
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
  // PROFILE: {
  //   key: 'PROFILE',
  // 	path: '/profile',
  // 	component: pages.Profile,
  // 	isExact: true,
  // 	isPrivate: true,
  // },

  /* KEEP 404 AT THE END */
  {
    name: '404',
    path: '*',
    component: pages.Landing,
    isExact: true,
    isPrivate: false,
  },
];

const routes = new Map();

ROUTE_LIST.forEach(route => {
  routes.set(route.name, route);
});

export const INITIAL_ROUTE: string = routes.get('DASHBOARD').path;

export default routes;
