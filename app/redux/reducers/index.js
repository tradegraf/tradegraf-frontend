import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '@app/utils/history';
import { REDUX_KEY } from '@app/shared/constants';
import authReducer from './auth';

export default function createReducer(injectedReducers = {}) {
	const rootReducer = combineReducers({
		[REDUX_KEY.AUTH]: authReducer,
		router: connectRouter(history),
		...injectedReducers,
	});

	return rootReducer;
}
