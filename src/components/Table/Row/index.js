import React from 'react';
import moment from 'moment';

export const Row = props => (
	<tr>
		<td className="px-6 py-4 whitespace-nowrap">
			<div className="flex items-center">
				<div className="text-sm font-medium text-gray-900 dark:text-gray-50">
					{moment().subtract(15, 'minutes').format('DD MMMM, HH:mm')}
				</div>
			</div>
		</td>
		<td className="px-6 py-4 whitespace-nowrap">
			<div className="text-sm text-gray-900 dark:text-gray-50">{props.pair}</div>
		</td>
		<td className="px-6 py-4 whitespace-nowrap">
			<div className="text-sm text-gray-900 dark:text-gray-50">{props.orderPrice}</div>
		</td>
		<td className="px-6 py-4 whitespace-nowrap">
			<div className="text-sm text-gray-900 dark:text-gray-50">{props.amount}</div>
		</td>
		<td className="px-6 py-4 text-right whitespace-nowrap">
			<span
				className={`px-3 py-1 inline-flex text-sm font-medium leading-4 tracking-tight rounded-full ${
					props.status === 'fulfilled'
						? 'bg-green-200 text-green-800'
						: 'text-yellow-600 bg-yellow-200'
				}`}
			>
				{props.status}
			</span>
		</td>
		<td
			className={`px-6 py-4 text-right whitespace-nowrap text-sm ${
				props.increase ? 'text-green-500' : 'text-red-500'
			}`}
		>
			{props.change}
		</td>
	</tr>
);
