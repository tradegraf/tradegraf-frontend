const isValidEmail = require('../isValidEmail');

describe('isValidEmail.isValidEmail', () => {
	test('0', () => {
		const result = isValidEmail.isValidEmail('user@host:300');
		expect(result).toBe(false);
	});

	test('1', () => {
		const result = isValidEmail.isValidEmail('something@example.com');
		expect(result).toBe(true);
	});

	test('2', () => {
		const result = isValidEmail.isValidEmail();
		expect(result).toBe(false);
	});

	test('3', () => {
		const result = isValidEmail.isValidEmail('');
		expect(result).toBe(false);
	});

	test('4', () => {
		const result = isValidEmail.isValidEmail('@something@example.com');
		expect(result).toBe(false);
	});

	test('5', () => {
		const result = isValidEmail.isValidEmail('ponicode.com');
		expect(result).toBe(false);
	});

	test('6', () => {
		const result = isValidEmail.isValidEmail('git@github.com:umijs/bigfish.git');
		expect(result).toBe(false);
	});
});
