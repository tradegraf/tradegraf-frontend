import React, { useEffect, FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Amplify, { Hub } from 'aws-amplify';
import { useRecoilState } from 'recoil';

import theme from './theme';
import { AppHeader } from './containers/Layout/AppHeader';
import { AppLayout } from './containers/Layout/AppLayout';
import { ContentLayout } from './containers/Layout/ContentLayout';
import { AppRoutes, PublicRoutes } from './containers/AppRoutes';
import awsconfig from './aws-exports';

import './index.css';
import { userAtom } from './state/user/atoms';

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
    <ChakraProvider theme={theme}>
      <CSSReset />
      <AppLayout>
        <Router>
          {user ? (
            <>
              <AppHeader />
              <ContentLayout>
                <Switch>
                  <AppRoutes />
                </Switch>
              </ContentLayout>
            </>
          ) : (
            <Switch>
              <Route
                exact
                path="/health"
                render={() => {
                  return <p>{new Date().toLocaleDateString()}</p>;
                }}
              />
              <PublicRoutes />
            </Switch>
          )}
        </Router>
      </AppLayout>
    </ChakraProvider>
  );
};

export default App;
