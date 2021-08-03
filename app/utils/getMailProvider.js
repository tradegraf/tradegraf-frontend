import { VALID_EMAIL_PROVIDERS } from '@app/shared/constants';
import { isValidString } from './common';

export const getMailProvider = (email) => {
	if (!isValidString(email)) return null;

	const provider = email.split('@').pop();
	if (VALID_EMAIL_PROVIDERS.includes(provider)) return provider;

	return null;
};
