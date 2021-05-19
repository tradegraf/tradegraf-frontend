import * as React from 'react';
import { Image, ImageProps, forwardRef, useColorMode } from '@chakra-ui/react';
import LogoBlack from './src/tradegraf-black.svg';
import LogoWhite from './src/tradegraf-white.svg';

const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
  const { colorMode } = useColorMode();
  return <Image src={colorMode === 'light' ? LogoBlack : LogoWhite} ref={ref} {...props} />;
});

export default Logo;
