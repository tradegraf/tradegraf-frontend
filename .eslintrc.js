module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['react', '@typescript-eslint', 'prettier'],
	env: {
		browser: true,
		jasmine: true,
		jest: true,
	},
	rules: {
		'import/extensions': [
			0,
			'never',
			{
				ignorePackages: true,
				pattern: {
					js: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
				},
			},
		],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/naming-convention': 0,
		'import/no-unresolved': 0,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'import/prefer-default-export': 0,
		'react/prop-types': 0,
		'react/static-property-placement': 0,
		'react/jsx-props-no-spreading': 0,
		'no-underscore-dangle': 0,
		'react/destructuring-assignment': 0,
		'no-undef': 0,
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
};
