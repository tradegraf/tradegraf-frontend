import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Amplify from 'aws-amplify';
import { useRecoilValue } from 'recoil';

import theme from './theme';
import { AuthContainer } from './containers/Auth';

import AppLayout from './containers/Layout/AppLayout';
import ContentLayout from './containers/Layout/ContentLayout';

import { AppRoutes, PublicRoutes } from './containers/AppRoutes';
import awsconfig from './aws-exports';

import './index.css';
import { userAtom } from './state/user/atoms';
import { FullPageLoading } from './components/Loading';

const AppHeader = React.lazy(() => import('./containers/Layout/AppHeader'));

Amplify.configure(awsconfig);

const App: FC = () => {
  const token = useRecoilValue(userAtom);

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <AppLayout>
          {token ? (
            <React.Suspense fallback={<FullPageLoading />}>
              <AppHeader />
              <ContentLayout>
                <AppRoutes />
              </ContentLayout>
            </React.Suspense>
          ) : (
            <AuthContainer>
              <PublicRoutes />
            </AuthContainer>
          )}
        </AppLayout>
      </ChakraProvider>
    </Router>
  );
};

export default App;
