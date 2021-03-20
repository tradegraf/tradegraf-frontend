import React from 'react';
import moment from 'moment';

export const Table = () => (
	<div className="flex flex-col">
		<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
					<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
						<thead className="bg-gray-50 dark:bg-gray-900">
							<tr>
								<th
									scope="col"
									className="px-6 py-3 w-48 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
								>
									Date
								</th>
								<th
									scope="col"
									className="px-6 py-3 w-36 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
								>
									Pair
								</th>
								<th
									scope="col"
									className="px-6 py-3 w-36 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
								>
									Order Price
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
								>
									Amount
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
								>
									Status
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
								>
									Change
								</th>
							</tr>
						</thead>
						<tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
							<tr>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<div className="">
											<div className="text-sm font-medium text-gray-900 dark:text-gray-50">
												{moment().subtract(15, 'minutes').format('DD MMMM, HH:mm')}
											</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900 dark:text-gray-50">BTC/USD</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900 dark:text-gray-50">57640$</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900 dark:text-gray-50">32535$</div>
								</td>
								<td className="px-6 py-4 text-right whitespace-nowrap">
									<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
										Fulfilled
									</span>
								</td>
								<td className="px-6 py-4 text-right whitespace-nowrap text-sm text-green-500">
									+29.53%
								</td>
							</tr>
							<tr>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<div className="">
											<div className="text-sm font-medium text-gray-900 dark:text-gray-50">
												{moment().subtract(20, 'minutes').format('DD MMMM, HH:mm')}
											</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900 dark:text-gray-50">BTC/USD</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900 dark:text-gray-50">55740$</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900 dark:text-gray-50">25035$</div>
								</td>
								<td className="px-6 py-4 text-right whitespace-nowrap">
									<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-yellow-900">
										Pending
									</span>
								</td>
								<td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-100">-</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
);
