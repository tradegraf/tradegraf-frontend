import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
	{
		loginRequest: { email: null },
		loginSuccess: { response: null },
		loginFailure: { failure: null },
		logoutRequest: {},
		authTempTokenRequest: { data: null },
		authTempTokenSuccess: { response: null },
		authTempTokenFailure: { failure: null },
		setUser: { user: null },
		setToken: { token: null },
		initPage: null,
		destroyPage: null,
	},
	{},
);
