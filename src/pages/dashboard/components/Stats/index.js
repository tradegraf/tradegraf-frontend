import React from 'react';

import { StatsCard } from '../../../../components/Cards';

export const Stats = () => (
		<div className="grid grid-flow-col-dense gap-4 auto-cols-min overflow-x-auto">
			<StatsCard title="Total Balance" resultNumber="₺523.265" percentage={61} />
			<StatsCard title="Daily Profit" resultNumber="₺516" percentage={-0.3} />
			<StatsCard title="Weekly Profit" resultNumber="₺4.326" percentage={6.7} />
		</div>
	);
