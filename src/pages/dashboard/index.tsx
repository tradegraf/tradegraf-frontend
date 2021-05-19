import React from 'react';
// import { Spinner } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { PageLoader } from '../../containers/PageLoader';
import { currentBalanceSelector } from './state/selectors';

const Stats = React.lazy(() => import('./components/Stats'));

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

  console.log('did this rendered');

  return (
    <PageLoader>
      <Stats statItems={statItems} />
    </PageLoader>
  );
};
export default Dashboard;
