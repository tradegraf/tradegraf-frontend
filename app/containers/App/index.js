import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { Creators as AuthCreators } from '@app/redux/actions/auth';
import { getUser, getToken } from '@app/redux/selectors/auth';

import { FullpageSpinner } from '@app/components/Spinner';
import { AppRoutes, PublicRoutes } from '@app/containers/AppRoutes';
import { auth } from '@app/config/firebase';

const AppLayout = React.lazy(() => import('@app/containers/App/AppLayout'));

const App = () => {
	const dispatch = useDispatch();
	const user = useSelector(getUser);
	const isTokenAvailable = useSelector(getToken);

	useEffect(() => {
		dispatch(AuthCreators.initPage());

		return () => {
			dispatch(AuthCreators.destroyPage());
		};
	}, [dispatch]);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			dispatch(AuthCreators.setUser({ user: authUser }));
		});
	}, [dispatch]);

	return (
		<>
			<Helmet titleTemplate="%s - Tradegraf" defaultTitle="Tradegraf" />
			{!_.isEmpty(user) || isTokenAvailable ? (
				<React.Suspense fallback={<FullpageSpinner />}>
					<AppLayout>
						<AppRoutes />
					</AppLayout>
				</React.Suspense>
			) : (
				<PublicRoutes />
			)}
		</>
	);
};

const withConnect = connect();

export default withConnect(App);
