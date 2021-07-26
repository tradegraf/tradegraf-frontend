import React from 'react';
import { Helmet } from 'react-helmet';

import { FullpageSpinner } from '@app/components/Spinner';
import { AppRoutes, PublicRoutes } from '@app/containers/AppRoutes';
import { useAuth } from '@app/shared/hooks/useAuth';

const AppLayout = React.lazy(() => import('@app/containers/App/AppLayout'));

const App = () => {
	const { user } = useAuth();

	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	return (
		<>
			<Helmet titleTemplate="%s - Tradegraf" defaultTitle="Tradegraf" />
			{user ? (
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

export default App;
