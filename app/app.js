import '@babel/polyfill';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ThemeProvider } from 'react-jss';
import FontFaceObserver from 'fontfaceobserver';
import { Settings } from 'luxon';

import jssTheme from '@app/jss-theme';
import { callback as index18NCallback } from '@app/i18n';
import { getAntLocale } from '@app/utils/localization';
import { AuthProvider } from '@app/shared/hooks/useAuth';
import App from '@app/containers/App';

import { FullpageSpinner } from './components/Spinner';

import './default.less';

// import '!file-loader?name=[name].[ext]!./images/favicon.ico';

import 'file-loader?name=.htaccess!./.htaccess';

const openSansObserver = new FontFaceObserver('Open Sans', {});

openSansObserver.load().then(() => {
	document.body.classList.add('fontLoaded');
});

const MOUNT_NODE = document.querySelector('#app');

const render = () => {
	ReactDOM.render(
		<Router>
			<Suspense fallback={<FullpageSpinner />}>
				<AuthProvider>
					<RecoilRoot>
						<AntdConfigProvider locale={getAntLocale()}>
							<ThemeProvider theme={jssTheme}>
								<App />
							</ThemeProvider>
						</AntdConfigProvider>
					</RecoilRoot>
				</AuthProvider>
			</Suspense>
		</Router>,
		MOUNT_NODE,
	);
};

if (module.hot) {
	// Hot reloadable React components and translation json files
	// modules.hot.accept does not accept dynamic dependencies,
	// have to be constants at compile-time
	module.hot.accept(['./i18n', 'containers/App'], () => {
		ReactDOM.unmountComponentAtNode(MOUNT_NODE);
		render();
	});
}

index18NCallback.then(() => {
	render();
});

Settings.defaultLocale = 'tr-TR';

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
	require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
