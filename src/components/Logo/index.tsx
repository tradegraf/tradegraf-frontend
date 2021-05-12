import * as React from 'react';
import { chakra, ImageProps, forwardRef } from '@chakra-ui/react';
// import LogoBlack from "./src/tradegraf-black.svg"
import LogoWhite from './src/tradegraf-white.svg';

const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
	return <chakra.img src={LogoWhite} ref={ref} {...props} />;
});

export default Logo;
