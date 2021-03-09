import { createReducer } from 'reduxsauce';

import { Types } from '../actions/loadingBar';

export const INITIAL_STATE = { selectedLanguage: null };

export const setSelectedLanguage = (state = INITIAL_STATE, { selectedLanguage }) => {
  return {
    ...state,
    selectedLanguage,
  };
};

export const HANDLERS = { [Types.SET_SELECTED_LANGUAGE]: setSelectedLanguage };

export default createReducer(INITIAL_STATE, HANDLERS);
