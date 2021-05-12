import React from 'react';
import { Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import routes, { RoutesArr } from '../../shared/routes';
import PrivateRoute from '../../utils/privateRoute';

export const AppRoutes: React.FC = () => {
	const { isAuthenticated } = useAuth0();

	const appRoutes: RoutesArr = [];
	routes.forEach(route => appRoutes.push(route));

	return (
		<Switch>
			{isAuthenticated &&
				appRoutes.map(
					route =>
						route.private && (
							<PrivateRoute key={route.name} page={route} isAuthenticated={isAuthenticated} />
						),
				)}
		</Switch>
	);
};
