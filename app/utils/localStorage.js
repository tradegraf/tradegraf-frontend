import { LOCAL_STORAGE, AUTH_ERRORS } from '@app/shared/constants';
import { Decrypt, Encrypt } from '@app/utils/encryption';

export const clearLocalStorage = () => {
	localStorage.clear();
	window.location.reload();
};

export const getEmailFromLocalStorage = () => {
	const ecryptedEmail = localStorage.getItem(LOCAL_STORAGE.USER_EMAIL);
	return ecryptedEmail ? Decrypt(ecryptedEmail) : null;
};

export const setEmailToLocalStorage = (email) => {
	localStorage.setItem(LOCAL_STORAGE.USER_EMAIL, Encrypt(email));
};
