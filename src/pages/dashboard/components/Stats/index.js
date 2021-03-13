import React from 'react';

import { StatsCard } from '../../../../components/Cards';

export const Stats = () => {
	return (
		<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			<StatsCard title="Total Balance" resultNumber="₺523.265" percentage="61%" increase />
			<StatsCard title="Daily Profit" resultNumber="₺516" percentage="-0.3%" increase={false} />
			<StatsCard title="Weekly Profit" resultNumber="₺4.326" percentage="6.7%" increase />
		</div>
	);
};
