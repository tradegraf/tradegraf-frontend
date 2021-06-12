import CryptoJS from 'crypto-js';

export const Encrypt = (message) =>
	CryptoJS.AES.encrypt(message, process.env.REACT_APP_ENCRYPTION_KEY).toString();

export const Decrypt = (message) => {
	const bytes = CryptoJS.AES.decrypt(message, process.env.REACT_APP_ENCRYPTION_KEY);
	return bytes.toString(CryptoJS.enc.Utf8);
};
