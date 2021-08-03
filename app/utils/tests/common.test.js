const common = require('../common');

describe('common.removeWhiteSpaceFromString', () => {
	test('Hello, world!', () => {
		const result = common.removeWhiteSpaceFromString('Hello, world!');
		expect(result).toBe('Hello,world!');
	});

	test('undefined', () => {
		const result = common.removeWhiteSpaceFromString();
		expect(result).toBe(null);
	});

	test('[]', () => {
		const result = common.removeWhiteSpaceFromString([]);
		expect(result).toBe(null);
	});

	test('array of strings', () => {
		const result = common.removeWhiteSpaceFromString([
			'This is a Text',
			'This is a Text',
			'foo bar',
			'This is a Text',
			'This is a Text',
			'Hello, world!',
			'Hello, world!',
		]);
		expect(result).toBe(null);
	});

	test('empty string', () => {
		const result = common.removeWhiteSpaceFromString(' ');
		expect(result).toBe(null);
	});

	test('Hello', () => {
		const result = common.removeWhiteSpaceFromString('Hello');
		expect(result).toBe('Hello');
	});

	test('Hello      world', () => {
		const result = common.removeWhiteSpaceFromString('Hello    world');
		expect(result).toBe('Helloworld');
	});
});

describe('common.isValidString', () => {
	test('This is a Text', () => {
		const result = common.isValidString('This is a Text');
		expect(result).toBe(true);
	});

	test('undefined', () => {
		const result = common.isValidString();
		expect(result).toBe(false);
	});

	test('empty string', () => {
		const result = common.isValidString('');
		expect(result).toBe(false);
	});

	test('array', () => {
		const result = common.isValidString(['ponicodeIsAwesome', -0.353, '**Hamburger**', 4653]);
		expect(result).toBe(false);
	});
});
