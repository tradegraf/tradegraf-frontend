import React, { useEffect, FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Amplify, { Hub } from 'aws-amplify';
import { useRecoilState } from 'recoil';

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
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    Hub.listen('auth', ({ payload }) => {
      if (payload.event === 'signIn') setUser(payload.data);
    });
  }, [setUser]);

  console.log(user);

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <AppLayout>
          {user && (
            <React.Suspense fallback={<FullPageLoading />}>
              <AppHeader />
              <ContentLayout>
                <AppRoutes />
              </ContentLayout>
            </React.Suspense>
          )}
          <AuthContainer>
            <PublicRoutes />
          </AuthContainer>
        </AppLayout>
      </ChakraProvider>
    </Router>
  );
};

export default App;
