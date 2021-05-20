import React, { memo } from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import { ReactComponent as LogoBlack } from './src/tradegraf-black.svg';
import { ReactComponent as LogoWhite } from './src/tradegraf-white.svg';

import './index.css';

interface LogoProps {
  height?: string;
  width?: string;
}

const Logo: React.FC<LogoProps> = props => {
  const { colorMode } = useColorMode();
  return (
    <Flex alignItems="center" justifyContent="center" className="logo" height="auto" {...props}>
      {colorMode === 'light' ? <LogoBlack width="100%" /> : <LogoWhite width="100%" />}
    </Flex>
  );
};

export default memo(Logo);
