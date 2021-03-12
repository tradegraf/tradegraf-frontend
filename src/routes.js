import pages from './pages';

const getRouteObject = routes => {
 const route = {};
 routes.forEach(item => {
   route[item.key] = item;
 });
 return route;
};

// eslint-disable-next-line no-underscore-dangle
const _ROUTE = {
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

const routes = Object.entries(_ROUTE).map(([key, route]) => {
	return {
		key,
		...route,
	};
});

export const ROUTE = getRouteObject(routes);

// eslint-disable-next-line no-console
console.log(ROUTE);

export const INITIAL_ROUTE = ROUTE.DASHBOARD;

export default routes;
