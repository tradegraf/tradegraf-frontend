import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../../utils/history';
import { REDUX_KEY } from '../../shared/constants';
import authReducer from './auth';
import loadingBarReducer from './loadingBar';
import commonReducer from './common';

const createRootReducer = (injectedReducers = {}) =>
	combineReducers({
		router: connectRouter(history),
		[REDUX_KEY.LOADING_BAR]: loadingBarReducer,
		[REDUX_KEY.AUTH]: authReducer,
		[REDUX_KEY.COMMON]: commonReducer,
		...injectedReducers,
	});

export default createRootReducer;
