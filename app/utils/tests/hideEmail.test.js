const hideEmail = require('../hideEmail');

describe('hideEmail.hideEmail', () => {
	test('0', () => {
		const result = hideEmail.hideEmail('something@example.com');
		expect(result).toBe('s*****@example.com');
	});

	test('1', () => {
		hideEmail.hideEmail('ponicode.com');
	});

	test('2', () => {
		const result = hideEmail.hideEmail();
		expect(result).toBe(null);
	});

	test('3', () => {
		const result = hideEmail.hideEmail('');
		expect(result).toBe(null);
	});
});
