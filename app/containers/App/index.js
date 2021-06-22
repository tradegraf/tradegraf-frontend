import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Creators } from '@app/redux/actions/auth';
import { getUser, getToken } from '@app/redux/selectors/auth';

import { FullpageSpinner } from '@app/components/Spinner';
import ContentLayout from '@app/containers/App/AppLayout/AppContent';
import { AppRoutes, PublicRoutes } from '@app/containers/AppRoutes';
import { auth } from '@app/config/firebase';

const AppHeader = React.lazy(() => import('@app/containers/App/AppLayout/AppHeader'));

const App = ({ user, token }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			dispatch(Creators.setUser({ user }));
		});
	}, [dispatch]);

	return (
		<>
			<Helmet titleTemplate="%s - Tradegraf" defaultTitle="Tradegraf" />
			{user && token ? (
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

App.propTypes = {
	user: PropTypes.object,
	token: PropTypes.string,
};

const mapStateToProps = () => ({ user: getUser(), token: getToken() });

const withConnect = connect(mapStateToProps);

export default withConnect(App);
