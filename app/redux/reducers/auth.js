import { createReducer } from 'reduxsauce';

import { Types } from '@app/redux/actions/auth';

export const INITIAL_STATE = {
	user: {},
	token: null,
	isLoginPending: false,
	isLoginSuccess: false,
	isAuthTempTokenPending: false,
	error: null,
};

export const loginRequest = (state = INITIAL_STATE) => ({
	...state,
	isLoginPending: true,
	isLoginSuccess: false,
});

export const loginSuccess = (state = INITIAL_STATE, { email }) => ({
	...state,
	isLoginPending: false,
	isLoginSuccess: true,
	user: {
		email,
	},
});

export const loginFailure = (state = INITIAL_STATE) => ({
	...state,
	isLoginPending: false,
	isLoginSuccess: false,
});

export const authTempTokenRequest = (state = INITIAL_STATE) => ({
	...state,
	isAuthTempTokenPending: true,
});

export const authTempTokenSuccess = (state = INITIAL_STATE, { user = {}, token }) => ({
	...state,
	isAuthTempTokenPending: false,
	user,
	token,
});

export const authTempTokenFailure = (state = INITIAL_STATE, { error }) => ({
	...state,
	isAuthTempTokenPending: false,
	error,
	user: {},
	token: null,
});

export const logoutRequest = (state = INITIAL_STATE) => ({
	...state,
	user: {},
	token: null,
});

export const setUser = (state = INITIAL_STATE, { user }) => ({
	...state,
	user,
});

export const setToken = (state = INITIAL_STATE, { token }) => ({
	...state,
	token,
});

export const HANDLERS = {
	[Types.LOGIN_REQUEST]: loginRequest,
	[Types.LOGIN_SUCCESS]: loginSuccess,
	[Types.LOGIN_FAILURE]: loginFailure,
	[Types.AUTH_TEMP_TOKEN_REQUEST]: authTempTokenRequest,
	[Types.AUTH_TEMP_TOKEN_SUCCESS]: authTempTokenSuccess,
	[Types.AUTH_TEMP_TOKEN_FAILURE]: authTempTokenFailure,
	[Types.LOGOUT_REQUEST]: logoutRequest,
	[Types.SET_USER]: setUser,
};

export default createReducer(INITIAL_STATE, HANDLERS);
