import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../../utils/history';
import { REDUX_KEY } from '../../shared/constants';
import authReducer from './auth';
import languageSelectionReducer from './languageSelection';
import loadingBarReducer from './loadingBar';

const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    [REDUX_KEY.LOADING_BAR]: loadingBarReducer,
    [REDUX_KEY.AUTH]: authReducer,
    [REDUX_KEY.LANGUAGE_SELECTION]: languageSelectionReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
};

export default createReducer;
