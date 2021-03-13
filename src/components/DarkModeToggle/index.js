import React from 'react';
import { useSelector } from 'react-redux';

import { darkModeSelector } from '../../redux/selectors/common';

export const DarkModeToggle = ({ themeToggle }) => {
	const isDarkMode = useSelector(darkModeSelector.getDarkMode);

	const classString =
		'text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-100';

	return (
		<button
			type="button"
			className="mr-4 p-2 focus:outline-none focus:border-none hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full"
			onClick={themeToggle}
		>
			{isDarkMode === true ? (
				<svg
					className={`w-5 h-5 ${classString}`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			) : (
				<svg
					className={`w-5 h-5 ${classString}`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			)}
		</button>
	);
};
