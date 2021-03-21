import pages from './pages';

const getRouteObject = routes => {
	const route = {};
	routes.forEach(item => {
		route[item.key] = item;
	});
	return route;
};

const _ROUTE = {
	LOGIN: {
		path: '/login',
		component: pages.Login,
	},
	DASHBOARD: {
		path: '/dashboard',
		component: pages.Dashboard,
		exact: true,
	},
	//  TRANSFER_GROUP_LIST: {
	//    path: '/transferGroup/list',
	//    component: pages.TransferGroupList,
	//    exact: true,
	//    allowed: [],
	//  },
};

const routes = Object.entries(_ROUTE).map(([key, route]) => ({
	key,
	...route,
}));

export const ROUTE = getRouteObject(routes);

export const INITIAL_ROUTE = ROUTE.DASHBOARD;

export default routes;
