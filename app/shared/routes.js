import pages from '@app/pages';
import { RedirectContainer, RedirectPrivateContainer } from '@app/containers/Redirect';

const ROUTE_LIST = [
	{
		name: 'LANDING',
		path: '/',
		component: pages.Landing,
		isExact: true,
		isPrivate: false,
	},
	{
		name: 'AUTH',
		path: '/completeLogin',
		component: pages.Auth,
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
	// {
	//   name: 'SUBSCRIPTION',
	//   path: '/subscription',
	//   isExact: true,
	//   component: RedirectProfile,
	//   isPrivate: true,
	// },
	// {
	//   name: 'REFERRAL',
	//   path: '/referral',
	//   isExact: true,
	//   component: RedirectProfile,
	//   isPrivate: true,
	// },
	// {
	//   name: 'PROFILE_OVERVIEW',
	//   path: '/profile/overview',
	//   component: pages.Profile.Overview,
	//   isExact: true,
	//   isPrivate: true,
	// },
	// {
	//   name: 'PROFILE_API_MANAGEMENT',
	//   path: '/profile/api',
	//   component: pages.Profile.Api,
	//   isExact: true,
	//   isPrivate: true,
	// },
	// {
	//   name: 'PROFILE_SETTINGS',
	//   path: '/profile/settings',
	//   component: pages.Profile.Overview,
	//   isExact: true,
	//   isPrivate: true,
	// },
	// {
	//   name: 'PROFILE',
	//   path: '/profile/*',
	//   component: pages.Profile.Default,
	//   isExact: true,
	//   isPrivate: true,
	// },

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

ROUTE_LIST.forEach((route) => {
	routes.set(route.name, route);
});

export const INITIAL_ROUTE = routes.get('DASHBOARD').path;

export default routes;
