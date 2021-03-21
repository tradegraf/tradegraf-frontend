import React from 'react';

import { MdTrendingUp, MdTrendingDown } from 'react-icons/md';

export const StatsCard = props => (
	<div className="flex flex-col px-6 py-5 bg-gray-50 dark:bg-gray-900 rounded-lg">
		<div className="text-base text-gray-400 ">{props.title}</div>
		<div className="flex items-center pt-1">
			<div className="text-2xl font-bold text-gray-900 dark:text-gray-50 ">
				{props.resultNumber}
			</div>
			<PercentagePill percentage={props.percentage} increase={props.increase} />
		</div>
	</div>
);

const PercentagePill = props => {
	const pillClassName =
		props.percentage >= 0
			? 'flex items-center justify-center px-2 py-0.5 ml-3 text-sm text-green-600 bg-green-100 rounded-full'
			: 'flex items-center justify-center px-2 py-0.5 ml-3 text-sm text-red-600 bg-red-100 rounded-full';
	return (
		<span className={pillClassName}>
			{props.percentage >= 0 ? <MdTrendingUp /> : <MdTrendingDown />}
			<span className="ml-1 font-medium">{props.percentage}%</span>
		</span>
	);
};
