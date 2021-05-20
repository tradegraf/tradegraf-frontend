import React, { memo } from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import { ReactComponent as LogoBlack } from './src/tradegraf-black.svg';
import { ReactComponent as LogoWhite } from './src/tradegraf-white.svg';

const Logo: React.FC = props => {
  const { colorMode } = useColorMode();
  return (
    <Flex {...props}>
      {colorMode === 'light' ? <LogoBlack id="TradeGraf" /> : <LogoWhite id="TradeGraf" />}
    </Flex>
  );
};

export default memo(Logo);
