import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './utils/history';
import globalSagas from './redux/sagas';
import configureStore from './redux/configureStore';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Spinner from './components/Spinner';

import LoadingBar from './containers/HelperContainer/LoadingBar';

const initialState = {};
const store = configureStore(initialState, history);
store.runSaga(globalSagas);

ReactDOM.render(
	<Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<Spinner />}>
        <LoadingBar />
        <App />
      </Suspense>
    </ConnectedRouter>
  </Provider>,
	document.getElementById('root'),
);

reportWebVitals();
