import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Auth0ProviderWithHistory from './auth/auth0ProviderWithHistory';
import { RecoilRoot } from 'recoil';

import { App } from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<Auth0ProviderWithHistory>
				<ColorModeScript />
				<App />
			</Auth0ProviderWithHistory>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root'),
);

serviceWorker.unregister();

reportWebVitals();
