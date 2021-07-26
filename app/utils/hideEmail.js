export const hideEmail = (email) => {
	const hiddenMail = email.replace(/^(.)(.*)(.@.*)$/, (_, a, b, c) => a + b.replace(/./g, '*') + c);
	const [name, provider] = hiddenMail.split('@');
	return [name.slice(0, 6), provider].join('@');
};
