import { createSelector } from 'reselect';

import { REDUX_KEY } from '../../shared/constants';

export const getIsLoginPending = createSelector(
 state => state[REDUX_KEY.AUTH].isLoginPending,
 isLoginPending => isLoginPending
);

export const getIsLoginSuccess = createSelector(
 state => state[REDUX_KEY.AUTH].isLoginSuccess,
 isLoginSuccess => isLoginSuccess
);

export const getIsAuthTempTokenPending = createSelector(
 state => state[REDUX_KEY.AUTH].isAuthTempTokenPending,
 isAuthTempTokenPending => isAuthTempTokenPending
);

export const getToken = state => {
 let token;
 if (state) {
   token = state[REDUX_KEY.AUTH].token;
 }
 if (!token) {
   token = localStorage.getItem('token');
 }
 return token;
};

export const getUser = state => {
 let user;
 if (state) {
   user = state[REDUX_KEY.AUTH].user;
 }
 if (!user) {
   user = localStorage.getItem('user');
 }
 if (typeof user === 'string') {
   user = JSON.parse(user);
 }
 return user || {};
};

export const getUserRolesAndGroupType = state => {
 const { groupType, roles } = getUser(state);

 return { groupType, roles };
};
