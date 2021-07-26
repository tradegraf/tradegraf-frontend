/* eslint-disable unicorn/consistent-function-scoping */
import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import 'firebase/auth';

import { actionCodeSettings } from '@app/config/firebase';
import { setEmailToLocalStorage } from '@app/utils/localStorage';
import { AUTH_ERRORS, LOCAL_STORAGE } from '@app/shared/constants';

firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticating, setIsAuthenticating] = useState(true);
	const [isLoginRequestPending, setIsLoginRequestPending] = useState(false);
	const [isLoginRequestSent, setIsLoginRequestSent] = useState(false);

	const sendSignInLinkToEmail = async (email) => {
		setIsLoginRequestPending(true);
		try {
			return await firebase
				.auth()
				.sendSignInLinkToEmail(email, actionCodeSettings)
				.then(() => {
					setEmailToLocalStorage(email);
					setIsLoginRequestPending(false);
					setIsLoginRequestSent(true);
					return true;
				})
				.catch((error) => {
					throw new Error(error);
				});
		} catch (error) {
			setIsLoginRequestPending(false);
			throw new Error(error);
		}
	};

	const signInWithEmailLink = ({ email, location }) => {
		if (firebase.auth().isSignInWithEmailLink(location)) {
			if (!email) throw new Error(AUTH_ERRORS.EMAIL_NOT_FOUND);
			firebase
				.auth()
				.signInWithEmailLink(email, location)
				.then((result) => {
					setUser(result.user);
					localStorage.removeItem(LOCAL_STORAGE.USER_EMAIL);
					Cookies.set('user_id', result.user.uid);
				})
				.catch((error) => {
					throw new Error(AUTH_ERRORS.UNKNOWN + error);
				});
		}
	};

	const logout = () =>
		firebase
			.auth()
			.signOut()
			.then(() => setUser(null));

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
			setUser(authUser);
			setIsAuthenticating(false);
		});

		return () => unsubscribe();
	}, []);

	const values = {
		user,
		isAuthenticating,
		isLoginRequestPending,
		isLoginRequestSent,
		sendSignInLinkToEmail,
		signInWithEmailLink,
		logout,
	};

	return (
		<AuthContext.Provider value={values}>{!isAuthenticating && children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
