import firebase from 'firebase/app';
import Cookies from 'js-cookie';
import axios from '@app/axios/common';
import { actionCodeSettings } from '@app/config/firebase';

import { AUTH_ERRORS } from '@app/shared/constants';

export const login = ({ email }) => {
	firebase
		.auth()
		.sendSignInLinkToEmail(email, actionCodeSettings)
		.then(() => email)
		.catch((err) => {
			const errorCode = err.code;
			const errorMessage = err.message;

			throw new Error({ errorCode, errorMessage });
		});
};

export const authTempToken = ({ location, email }) => {
	if (firebase.auth().isSignInWithEmailLink(location)) {
		if (!email) throw new Error(AUTH_ERRORS.EMAIL_NOT_FOUND);
		firebase
			.auth()
			.setPersistence(firebase.auth.Auth.Persistence.SESSION)
			.then(() => {
				return firebase
					.auth()
					.signInWithEmailLink(email, location)
					.then(({ user }) => {
						return user.getIdToken().then((token) => {
							Cookies.set('token', token);
						});
					})
					.catch((err) => {
						throw new Error(AUTH_ERRORS.UNKNOWN + err);
					});
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				throw new Error(AUTH_ERRORS.UNKNOWN + error);
			});
	}
};

export const logout = ({ userId: user, token }) =>
	axios({
		method: 'POST',
		url: '/logout',
		headers: { user, token },
		data: {},
	}).then((response) => response.data);
