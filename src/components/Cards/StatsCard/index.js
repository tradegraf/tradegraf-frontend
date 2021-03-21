import React from 'react';

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
			<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d={props.percentage >= 0 ? 'M18 15L12 9L6 15' : 'M6 9L12 15L18 9'}
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
			<span className="font-medium">{props.percentage}%</span>
		</span>
	);
};
