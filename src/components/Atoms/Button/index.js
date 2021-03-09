import React from 'react';

const Button = ({ children }) => {
	return (
		<button
			type="button"
			className="bg-gray-100 dark:bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-base text-gray-900 dark:text-gray-50 mt-4 md:mt-0 transition-all"
		>
			{children}
		</button>
	);
};

Button.XLarge = ({ children }) => {
	return (
		<button
			type="button"
			className="bg-gray-100 dark:bg-gray-800 border-0 py-2 px-10 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-2xl text-gray-900 dark:text-gray-50 mt-4 md:mt-0 transition-all"
		>
			{children}
		</button>
	);
};

Button.Large = ({ children }) => {
	return (
		<button
			type="button"
			className="bg-gray-100 dark:bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-xl text-gray-900 dark:text-gray-50 mt-4 md:mt-0 transition-all"
		>
			{children}
		</button>
	);
};

Button.Small = ({ children }) => {
	return (
		<button
			type="button"
			className="bg-gray-100 dark:bg-gray-800 border-0 py-1 px-2 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-sm text-gray-900 dark:text-gray-50 mt-4 md:mt-0 transition-all"
		>
			{children}
		</button>
	);
};

export default Button;
