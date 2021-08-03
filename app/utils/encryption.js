import CryptoJS from 'crypto-js';

import ENVIRONMENT from '../config/environment';
import { removeWhiteSpaceFromString, isValidString } from './common';

export const Encrypt = (message) => {
	const cleanedString = removeWhiteSpaceFromString(message);
	if (isValidString(cleanedString))
		return CryptoJS.AES.encrypt(message, ENVIRONMENT.ENCRYPTION_SALT).toString();

	return null;
};

export const Decrypt = (message) => {
	if (!message || typeof message !== 'string') return null;

	const bytes = CryptoJS.AES.decrypt(message, ENVIRONMENT.ENCRYPTION_SALT);
	return bytes.toString(CryptoJS.enc.Utf8);
};
