import React from 'react';
import { Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import _ from 'lodash';

import routes, { RoutesArr } from '../../shared/routes';
import { PrivateRoute } from '../../utils/privateRoute';
import { userAtom } from '../../state/user/atoms';

export const AppRoutes: React.FC = () => {
	const user = useRecoilValue(userAtom);

	const appRoutes: RoutesArr = [];
	routes.forEach(route => appRoutes.push(route));

	return (
		<Switch>
			{!_.isEmpty(user) &&
				appRoutes.map(
					route =>
						route.private && (
							<PrivateRoute key={route.name} page={route} isAuthenticated={!_.isEmpty(user)} />
						),
				)}
		</Switch>
	);
};
