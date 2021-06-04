import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { getToken, getIsAuthTempTokenPending } from '@app/redux/selectors/auth';

import { FullpageSpinner } from '@app/components/Spinner';
import ContentLayout from '@app/containers/App/AppLayout/AppContent';
import { AppRoutes, PublicRoutes } from '@app/containers/AppRoutes';

const AppHeader = React.lazy(() => import('@app/containers/App/AppLayout/AppHeader'));

const App = () => {
  const token = getToken();
  return (
    <>
      <Helmet titleTemplate="%s - Tradegraf" defaultTitle="Tradegraf" />
      {token ? (
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

const mapStateToProps = state => ({ isAuthTempTokenPending: getIsAuthTempTokenPending(state) });

const withConnect = connect(mapStateToProps);

export default withConnect(App);
