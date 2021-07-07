/* eslint-disable prefer-destructuring */
import { createSelector } from 'reselect';
import Cookies from 'js-cookie';
import firebase from 'firebase/app';

import { REDUX_KEY, LOCAL_STORAGE } from '@app/shared/constants';
import { Decrypt } from '@app/utils/encryption';

export const getIsLoginPending = createSelector(
	(state) => state[REDUX_KEY.AUTH].isLoginPending,
	(isLoginPending) => isLoginPending,
);

export const getIsLoginSuccess = createSelector(
	(state) => state[REDUX_KEY.AUTH].isLoginSuccess,
	(isLoginSuccess) => isLoginSuccess,
);

export const getIsAuthTempTokenPending = createSelector(
	(state) => state[REDUX_KEY.AUTH].isAuthTempTokenPending,
	(isAuthTempTokenPending) => isAuthTempTokenPending,
);

export const getToken = createSelector(
	(state) => state[REDUX_KEY.AUTH].token,
	(token) => token || !!Cookies.get('token'),
);

export const getUser = createSelector(
	(state) => state[REDUX_KEY.AUTH].user,
	(user) => user || firebase.auth().currentUser,
);

export const getTempUserMail = createSelector(
	(state) => state[REDUX_KEY.AUTH].tempEmail,
	(tempEmail) => {
		const localEmail = localStorage.getItem(LOCAL_STORAGE.USER_EMAIL);
		return tempEmail || (localEmail ? Decrypt(localEmail) : null);
	},
);

export const getUserRolesAndGroupType = (state) => {
	const { groupType, roles } = getUser(state);

	return { groupType, roles };
};
