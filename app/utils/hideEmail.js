import { isValidString } from './common';
import { isValidEmail } from './isValidEmail';

export const hideEmail = (email) => {
	if (!isValidString(email) || !isValidEmail(email)) return null;

	const hiddenMail = email.replace(/^(.)(.*)(.@.*)$/, (_, a, b, c) => a + b.replace(/./g, '*') + c);
	const [name, provider] = hiddenMail.split('@');
	return [name.slice(0, 6), provider].join('@');
};
