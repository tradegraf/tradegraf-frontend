import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ContentLayout } from '../../../../components/Layout';
import routes, { INITIAL_ROUTE } from '../../../../routes';

const AppContent = ({ isSidebarCollapsed }) => (
		<ContentLayout>
			<Switch>
				{routes.map(route => route.component ? (
						<Route
							key={route.key}
							path={route.path}
							exact={route.exact}
							render={propsParam => <route.component {...propsParam} />}
						/>
					) : null)}
				<Redirect from="/" to={INITIAL_ROUTE.path} />
			</Switch>
		</ContentLayout>
	);

export default AppContent;
