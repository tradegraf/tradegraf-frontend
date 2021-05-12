import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import routes, { RouteItem } from '../shared/routes';

interface IRouteProps {
	page: RouteItem;
	isAuthenticated: boolean;
}

const PrivateRoute: React.FC<IRouteProps> = ({ page, isAuthenticated }) => {
	if (page.path === '/') {
		if (!isAuthenticated) {
			return <Route path={page.path} exact={page.exact} component={page.component} />;
		} else {
			<Redirect to={routes.get('DASHBOARD').path} />;
		}
	}

	return !isAuthenticated ? (
		<Redirect to={routes.get('LANDING').path} />
	) : (
		<Route path={page.path} exact={page.exact} component={page.component} />
	);
};
export default PrivateRoute;
