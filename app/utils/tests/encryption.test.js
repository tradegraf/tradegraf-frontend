const encryption = require('../encryption');

describe('encryption.Encrypt', () => {
	test('0', () => {
		const result = encryption.Encrypt();
		expect(result).toBe(null);
	});

	test('correct', () => {
		const result = encryption.Encrypt('testString');

		expect(result).toBeTruthy();
	});

	test('2', () => {
		const result = encryption.Encrypt([]);
		expect(result).toBe(null);
	});

	test('3', () => {
		const result = encryption.Encrypt('');
		expect(result).toBe(null);
	});

	test('4', () => {
		const result = encryption.Encrypt('  ');
		expect(result).toBe(null);
	});
});

describe('encryption.Decrypt', () => {
	test('text', () => {
		const encryptionString = 'test';
		const encryptedText = encryption.Encrypt(encryptionString);
		const result = encryption.Decrypt(encryptedText);

		expect(result).toBe(encryptionString);
	});

	test('empty string', () => {
		const result = encryption.Decrypt('');

		expect(result).toBe(null);
	});

	test('undefined', () => {
		const result = encryption.Decrypt();

		expect(result).toBe(null);
	});

	test('number', () => {
		const result = encryption.Decrypt(420);

		expect(result).toBe(null);
	});
});
