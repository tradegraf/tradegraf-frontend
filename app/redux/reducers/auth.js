import { createReducer } from 'reduxsauce';

import { Types } from '@app/redux/actions/auth';

export const INITIAL_STATE = {
  user: {},
  token: null,
  isLoginSuccess: false,
  isLoginPending: false,
  isAuthTempTokenPending: false,
};

export const loginRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoginSuccess: false,
    isLoginPending: true,
  };
};

export const loginSuccess = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoginSuccess: true,
    isLoginPending: false,
  };
};

export const loginFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoginSuccess: false,
    isLoginPending: false,
  };
};

export const authTempTokenRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isAuthTempTokenPending: true,
    user: {},
    token: null,
  };
};

export const authTempTokenSuccess = (state = INITIAL_STATE, { user = {}, token }) => {
  return {
    ...state,
    isAuthTempTokenPending: false,
    user,
    token,
  };
};

export const authTempTokenFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isAuthTempTokenPending: false,
    user: {},
    token: null,
  };
};

export const logoutRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    user: {},
    token: null,
  };
};

export const HANDLERS = {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.AUTH_TEMP_TOKEN_REQUEST]: authTempTokenRequest,
  [Types.AUTH_TEMP_TOKEN_SUCCESS]: authTempTokenSuccess,
  [Types.AUTH_TEMP_TOKEN_FAILURE]: authTempTokenFailure,
  [Types.LOGOUT_REQUEST]: logoutRequest,
};

export default createReducer(INITIAL_STATE, HANDLERS);
