import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { getUser, getToken } from '@app/redux/selectors/auth';

import { FullpageSpinner } from '@app/components/Spinner';
import ContentLayout from '@app/containers/App/AppLayout/AppContent';
import { AppRoutes, PublicRoutes } from '@app/containers/AppRoutes';

const AppHeader = React.lazy(() => import('@app/containers/App/AppLayout/AppHeader'));

const App = ({ user, token }) => (
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

App.propTypes = {
	user: PropTypes.object,
	token: PropTypes.string,
};

const mapStateToProps = (state) => ({ user: getUser(state), token: getToken(state) });

const withConnect = connect(mapStateToProps);

export default withConnect(App);
