import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

import theme from './theme';
import { AppHeader } from './containers/Layout/AppHeader';
import { AppLayout } from './containers/Layout/AppLayout';
import { ContentLayout } from './containers/Layout/ContentLayout';
import { AppRoutes } from './containers/AppRoutes';
import { Loading } from './components/Loading';
import PrivateRoute from './utils/privateRoute';
import routes from './shared/routes';

export const App: React.FC = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<ChakraProvider theme={theme}>
			<AppLayout>
				<Router>
					<Switch>
						<React.Suspense fallback={<Loading />}>
							<PrivateRoute page={routes.get('LANDING')} isAuthenticated={isAuthenticated} />
							<AppHeader isAuthenticated={isAuthenticated} />
							<ContentLayout>
								<AppRoutes />
							</ContentLayout>
						</React.Suspense>
					</Switch>
				</Router>
			</AppLayout>
		</ChakraProvider>
	);
};
