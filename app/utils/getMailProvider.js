import { VALID_EMAIL_PROVIDERS } from '@app/shared/constants';

export const getMailProvider = (email) => {
	if (!email) return null;

	const provider = email.split('@').pop();
	if (VALID_EMAIL_PROVIDERS.some((p) => p === provider)) return provider;

	return null;
};
