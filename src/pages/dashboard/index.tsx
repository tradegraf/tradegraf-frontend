import React, { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

const Stats = React.lazy(() => import('./components/Stats'));
import { currentBalanceSelector } from './state/selectors';

const Dashboard: React.FC = () => {
	const currentBalance = useRecoilValue(currentBalanceSelector);
	const statItems = [
		{
			label: 'Current Balance',
			statNumber: currentBalance,
			helperIncreased: true,
			helperText: '5.35%',
		},
		{
			label: `Today's Profit`,
			statNumber: '5235',
			helperIncreased: false,
			helperText: '11.4%',
		},
	];

	return (
		<>
			<Suspense fallback={<Spinner />}>
				<Stats statItems={statItems} />
			</Suspense>
		</>
	);
};
export default Dashboard;
