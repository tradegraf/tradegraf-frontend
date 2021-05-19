import React from 'react';
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';

interface IStatItem {
  label: string;
  statNumber: string;
  helperIncreased: boolean | undefined;
  helperText: string;
}

interface IProps {
  statItems: IStatItem[];
}

const Stats: React.FC<IProps> = ({ statItems }) => {
  return (
    <StatGroup flexDir={['column', 'row']} my={['.5rem', '1rem']} w="100%">
      {statItems.map((stat: IStatItem) => (
        <Stat my={['.5rem', '0']} key={stat.label}>
          <StatLabel>{stat.label}</StatLabel>
          <StatNumber>{stat.statNumber}</StatNumber>
          <StatHelpText>
            <StatArrow type={stat.helperIncreased ? 'increase' : 'decrease'} />
            {stat.helperText}
          </StatHelpText>
        </Stat>
      ))}
    </StatGroup>
  );
};

export default Stats;
