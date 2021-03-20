import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-charts';

import { darkModeSelector } from '../../../../redux/selectors/common';

import useDemoConfig from './useDemoConfig';

export const DashboardChart = props => {
	const isDarkMode = useSelector(darkModeSelector.getDarkMode);
	const [{ min, max }, setState] = useState({
		min: null,
		max: null,
	});

	const { data } = useDemoConfig({
		series: 2,
	});

	const axes = useMemo(() => [
			{
				primary: true,
				type: 'time',
				position: 'bottom',
				hardMin: min,
				hardMax: max,
			},
			{
				type: 'linear',
				position: 'left',
			},
		], [max, min]);

	const brush = useMemo(() => ({
			onSelect: brushData => {
				setState({
					min: Math.min(brushData.start, brushData.end),
					max: Math.max(brushData.start, brushData.end),
				});
			},
		}), []);

	const series = useMemo(() => ({
			showPoints: true,
		}), []);

	return (
		<div className="bg-gray-50 dark:bg-gray-900 my-4 px-6 py-4 md:px-6 md:py-12 rounded-lg">
			<div className="w-full h-56 md:h-64 lg:h-96">
				<Chart
					data={data}
					axes={axes}
					primaryCursor
					tooltip
					brush={brush}
					series={series}
					dark={isDarkMode}
				/>
			</div>
		</div>
	);
};
