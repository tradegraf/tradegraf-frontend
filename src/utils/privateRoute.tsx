import React from 'react';
import { Route, useHistory, RouteProps } from 'react-router-dom';

import routes, { RouteItem } from '../shared/routes';

interface IRouteProps {
	page: RouteItem;
	isAuthenticated: boolean;
}

export const PrivateRoute = ({
	page,
	isAuthenticated,
}: IRouteProps): React.FC | RouteProps | void => {
	if (isAuthenticated) {
		return <Route path={page.path} exact={page.exact} component={page.component} />;
	}
	if (page.private) {
		const history = useHistory();
		return history.push(routes.get('LANDING').path);
	}
	return <Route path={page.path} exact={false} component={page.component} />;
};

export const PublicRotue = ({ page, isAuthenticated }: IRouteProps): React.FC | Route | void => {
	if (isAuthenticated) {
		const history = useHistory();
		return history.push(routes.get('LANDING').path);
	}

	return <Route path={page.path} exact={false} component={page.component} />;
};
