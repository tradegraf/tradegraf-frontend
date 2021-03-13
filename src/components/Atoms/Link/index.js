import React from 'react';

const Link = ({ href = '/', children }) => {
	return (
		<a href={href} className="mr-6 hover:text-gray-900">
			{children}
		</a>
	);
};

Link.Text = ({ href = '/', children }) => {
	return (
		<a
			href={href}
			className="text-gray-600 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 dark:hover:text-gray-100"
		>
			{children}
		</a>
	);
};

Link.Pill = ({ href = '/', children }) => {
	return (
		<a
			href={href}
			className="bg-blue-600 border-0 py-1 px-6 focus:outline-none hover:bg-blue-700 rounded-full text-base text-gray-50 mt-4 md:mt-0 transition-all"
		>
			{children}
		</a>
	);
};

Link.SidebarItem = ({ selected, href = '/', children }) => {
	const defaultClass =
		'hover:text-gray-800 hover:bg-gray-200 flex items-center p-2 my-6 transition-colors dark:hover:text-gray-100 dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-300 rounded-lg';
	const selectedClass =
		'hover:text-gray-800 hover:bg-gray-200 flex items-center p-2 my-6 transition-colors dark:hover:text-gray-100 dark:hover:bg-gray-600 duration-200 text-gray-800 dark:text-gray-100 rounded-lg bg-gray-50 dark:bg-gray-600';
	return (
		<a href={href} className={selected ? selectedClass : defaultClass}>
			<span className="mx-4 text-md font-medium">{children}</span>
			<span className="flex-grow text-right"></span>
		</a>
	);
};

export default Link;
