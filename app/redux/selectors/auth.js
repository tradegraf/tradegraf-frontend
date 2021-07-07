/* eslint-disable prefer-destructuring */
import { createSelector } from 'reselect';
import Cookies from 'js-cookie';

import { REDUX_KEY, LOCAL_STORAGE } from '@app/shared/constants';
import firebase from 'firebase/app';

export const getIsLoginPending = createSelector(
	(state) => state[REDUX_KEY.AUTH].isLoginPending,
	(isLoginPending) => isLoginPending,
);

export const getIsLoginSuccess = createSelector(
	(state) => state[REDUX_KEY.AUTH].isLoginSuccess,
	(isLoginSuccess) => {
		return isLoginSuccess || !!localStorage.getItem(LOCAL_STORAGE.USER_EMAIL);
	},
);

export const getIsAuthTempTokenPending = createSelector(
	(state) => state[REDUX_KEY.AUTH].isAuthTempTokenPending,
	(isAuthTempTokenPending) => isAuthTempTokenPending,
);

export const getToken = createSelector(
	(state) => state[REDUX_KEY.AUTH].token,
	(token) => {
		return token || !!Cookies.get('token');
	},
);

export const getUser = createSelector(
	(state) => state[REDUX_KEY.AUTH].user,
	(user) => user || firebase.auth().currentUser,
);

export const getUserRolesAndGroupType = (state) => {
	const { groupType, roles } = getUser(state);

	return { groupType, roles };
};
