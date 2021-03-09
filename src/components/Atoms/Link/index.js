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
			className="mx-6 text-base text-blue-600 hover:text-blue-800 hover:underline transition-all"
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

export default Link;
