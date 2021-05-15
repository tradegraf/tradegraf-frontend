import { LazyExoticComponent } from 'react';
import pages from '../pages';

export type RouteItem = {
	name: string;
	path: string;
	exact: boolean;
	private: boolean;
	component: LazyExoticComponent<React.FC>;
};

export type RoutesArr = RouteItem[];

const ROUTE_LIST: RoutesArr = [
	{
		name: 'LANDING',
		path: '/',
		component: pages.Landing,
		exact: true,
		private: false,
	},
	{
		name: 'DASHBOARD',
		path: '/dashboard',
		component: pages.Dashboard,
		exact: true,
		private: true,
	},
	{
		name: 'LOGIN',
		path: '/login',
		component: pages.Login,
		exact: true,
		private: false,
	},
	{
		name: 'SIGNUP',
		path: '/signup',
		component: pages.Signup,
		exact: true,
		private: false,
	},
	{
		name: 'VERIFICATION',
		path: '/verification',
		component: pages.Verification,
		exact: true,
		private: false,
	},
	// PROFILE: {
	//   key: 'PROFILE',
	// 	path: '/profile',
	// 	component: pages.Profile,
	// 	exact: true,
	// 	private: true,
	// },
];

const routes = new Map();

ROUTE_LIST.forEach(route => {
	routes.set(route.name, route);
});

export const INITIAL_ROUTE: string = routes.get('DASHBOARD').path;

export default routes;
