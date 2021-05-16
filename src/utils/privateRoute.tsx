import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import routes, { RouteItem } from '../shared/routes';

interface IRouteProps {
	page: RouteItem;
	isAuthenticated: boolean;
}

export const PrivateRoute: React.FC<IRouteProps> = ({ page, isAuthenticated }: IRouteProps) => {
	if (isAuthenticated) {
		return <Route path={page.path} exact={page.exact} component={page.component} />;
	}
	if (page.private) {
		const history = useHistory();
		return history.push(routes.get('LANDING').path);
	}
	return <Route path={page.path} exact={false} component={page.component} />;
};

export const PublicRotue: React.FC<IRouteProps> = ({ page, isAuthenticated }: IRouteProps) => {
	if (isAuthenticated) {
		const history = useHistory();
		return history.push(routes.get('LANDING').path);
	}

	return <Route path={page.path} exact={false} component={page.component} />;
};
