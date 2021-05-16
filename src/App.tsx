import React, { useEffect, FC } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Amplify, { Hub } from 'aws-amplify';
import { useRecoilState } from 'recoil';

import theme from './theme';
import { AppHeader } from './containers/Layout/AppHeader';
import { AppLayout } from './containers/Layout/AppLayout';
import { ContentLayout } from './containers/Layout/ContentLayout';
import { AppRoutes } from './containers/AppRoutes';
import { Loading } from './components/Loading';
import { PublicRotue } from './utils/privateRoute';
import routes from './shared/routes';
import awsconfig from './aws-exports';
import _ from 'lodash';

import './index.css';
import { userAtom } from './state/user/atoms';

Amplify.configure(awsconfig);

const App: FC = () => {
	const [user, setUser] = useRecoilState(userAtom);

	console.log('test');

	useEffect(() => {
		Hub.listen('auth', ({ payload }) => {
			if (payload.event === 'signIn') setUser(payload.data);
		});
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<AppLayout>
				<Router>
					<Switch>
						<React.Suspense fallback={<Loading />}>
							<PublicRotue page={routes.get('VERIFICATION')} isAuthenticated={!_.isEmpty(user)} />
							<PublicRotue page={routes.get('SIGNUP')} isAuthenticated={!_.isEmpty(user)} />
							<PublicRotue page={routes.get('LOGIN')} isAuthenticated={!_.isEmpty(user)} />
							<PublicRotue page={routes.get('LANDING')} isAuthenticated={!_.isEmpty(user)} />
							<AppHeader isAuthenticated={!_.isEmpty(user)} />
							{user && (
								<ContentLayout>
									<AppRoutes />
								</ContentLayout>
							)}
							<Route render={() => <Redirect to={routes.get('LANDING').path} />} />
						</React.Suspense>
					</Switch>
				</Router>
			</AppLayout>
		</ChakraProvider>
	);
};

export default App;
