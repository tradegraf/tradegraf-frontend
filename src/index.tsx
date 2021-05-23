import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';

import { FullPageLoading } from './components/Loading';

import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<FullPageLoading />}>
      <RecoilRoot>
        <ColorModeScript />
        <App />
      </RecoilRoot>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

reportWebVitals();
