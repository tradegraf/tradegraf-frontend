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
 LOGIN: {
   path: '/login',
   component: pages.Login,
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

export const INITIAL_ROUTE = ROUTE.TRANSFER_GROUP_LIST;

export default routes;
