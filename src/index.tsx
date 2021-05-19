import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript, Spinner } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';

import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
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
