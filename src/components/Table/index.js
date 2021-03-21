import React from 'react';

import { Row } from './Row';
import { Column } from './Column';

export const Table = props => (
	<div className="flex flex-col">
		<div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
				<div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
					<table className="divide-y divide-gray-200 dark:divide-gray-700">
						<thead className="bg-gray-50 dark:bg-gray-900">
							<tr>
								{props.columnData &&
									props.columnData.map(columnData => (
										<Column key={columnData._id} width={columnData.width} align={columnData.align}>
											{columnData.name}
										</Column>
									))}
							</tr>
						</thead>
						<tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
							{props.tableData ? (
								props.tableData.map(data => (
									<Row
										key={data._id}
										pair={data.pair}
										orderPrice={data.orderPrice}
										amount={data.amount}
										change={data.change}
										status={data.status}
										increase={data.increase}
									/>
								))
							) : (
								<td className="flex px-6 py-4 whitespace-nowrap w-full items-center justify-center">
									<div className="text-lg text-gray-800 dark:text-gray-100">No Data</div>
								</td>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
);
