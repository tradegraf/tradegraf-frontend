import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { Creators } from '@app/redux/actions/auth';
import { getUser, getToken } from '@app/redux/selectors/auth';

import { FullpageSpinner } from '@app/components/Spinner';
import ContentLayout from '@app/containers/App/AppLayout/AppContent';
import { AppRoutes, PublicRoutes } from '@app/containers/AppRoutes';
import { auth } from '@app/config/firebase';

const AppHeader = React.lazy(() => import('@app/containers/App/AppLayout/AppHeader'));

const App = () => {
	const dispatch = useDispatch();
	const user = useSelector(getUser);
	const isTokenAvailable = useSelector(getToken);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			dispatch(Creators.setUser({ user }));
		});
	}, [dispatch]);

	return (
		<>
			<Helmet titleTemplate="%s - Tradegraf" defaultTitle="Tradegraf" />
			{!_.isEmpty(user) && isTokenAvailable ? (
				<React.Suspense fallback={<FullpageSpinner />}>
					<AppHeader />
					<ContentLayout>
						<AppRoutes />
					</ContentLayout>
				</React.Suspense>
			) : (
				<PublicRoutes />
			)}
		</>
	);
};

const withConnect = connect();

export default withConnect(App);
