import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';

import routes, { ROUTE_LIST, INITIAL_ROUTE } from '@app/shared/routes';
import useStyles from './styles';

const { Content } = Layout;

const AppContent = () => {
	const classes = useStyles();

	return (
		<Router>
			<Content style={{ padding: '0 50px' }}>
				<Switch>
					{ROUTE_LIST.filter((route) => route.isPrivate).map((route) =>
						route.component ? (
							<Route
								key={route.key}
								path={route.path}
								exact={route.exact}
								render={(propsParam) => <route.component {...propsParam} />}
							/>
						) : null,
					)}
					<Redirect to={INITIAL_ROUTE.path} />
				</Switch>
			</Content>
		</Router>
	);
};

export default AppContent;
