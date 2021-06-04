import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '@app/utils/history';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: 'en',
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
