import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '@app/shared/routes';
import { PageLoader } from '@app/containers/PageLoader';

export const AppRoutes = () => {
	const appRoutes = [];
	routes.forEach((route) => appRoutes.push(route));

	const renderRoute = (route) => {
		if (route.children) route.children.map(renderRoute);

		const { name, path, isExact, component: Component } = route;

		return (
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
		);
	};

	return <Switch>{appRoutes.filter((route) => route.isPrivate).map(renderRoute)}</Switch>;
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
