import React from 'react';

export const Column = props => (
	<th
		scope="col"
		className={`px-6 py-3 w-${props.width} text-${props.align} text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider`}
	>
		{props.children}
	</th>
);
