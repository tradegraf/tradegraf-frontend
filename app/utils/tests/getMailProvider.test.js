const getMailProvider = require('../getMailProvider');
// @ponicode
describe('getMailProvider.getMailProvider', () => {
	test('0', () => {
		const result = getMailProvider.getMailProvider('something@example.com');
		expect(result).toBe(null);
	});

	test('1', () => {
		const result = getMailProvider.getMailProvider('something.example.com');

		expect(result).toBe(null);
	});

	test('2', () => {
		const result = getMailProvider.getMailProvider();
		expect(result).toBe(null);
	});

	test('3', () => {
		const result = getMailProvider.getMailProvider('');

		expect(result).toBe(null);
	});

	test('4', () => {
		const result = getMailProvider.getMailProvider('@');

		expect(result).toBe(null);
	});

	test('5', () => {
		const result = getMailProvider.getMailProvider('email@gmail.com');
		expect(result).toBe('gmail.com');
	});
});
