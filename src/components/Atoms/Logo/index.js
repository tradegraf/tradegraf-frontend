import React from 'react';
import { useSelector } from 'react-redux';

import { darkModeSelector } from '../../../redux/selectors/common';

import LogoWhite from './src/tradegraf-white.svg';
import LogoBlack from './src/tradegraf-black.svg';

export const Logo = () => {
	const isDarkMode = useSelector(darkModeSelector.getDarkMode);

  return (
		<a className="w-36" href="/">
			<img src={isDarkMode ? LogoWhite : LogoBlack} alt="Tradegraf Logo" />
		</a>
	);
};
