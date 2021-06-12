import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '@app/shared/routes';
import { PageLoader } from '@app/containers/PageLoader';

export const AppRoutes = () => {
	const appRoutes = [];
	routes.forEach((route) => appRoutes.push(route));

	return (
		<Switch>
			{appRoutes
				.filter((route) => route.isPrivate)
				.map(({ name, path, isExact, component: Component }) => (
					<Route
						key={name}
						path={path}
						exact={isExact}
						render={() => (
							<PageLoader>
								<Component />
							</PageLoader>
						)}
					/>
				))}
		</Switch>
	);
};

export const PublicRoutes = () => {
	const appRoutes = [];
	routes.forEach((route) => appRoutes.push(route));

	return (
		<Switch>
			{appRoutes
				.filter((route) => !route.isPrivate)
				.map(({ name, path, isExact, component: Component }) => (
					// <PublicRoute key={route.name} page={route} isAuthenticated={!_.isEmpty(user)} />
					<Route
						key={name}
						path={path}
						exact={isExact}
						render={() => (
							<PageLoader>
								<Component />
							</PageLoader>
						)}
					/>
				))}
		</Switch>
	);
};
