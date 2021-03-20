import React from 'react';
import { useSelector } from 'react-redux';

import { darkModeSelector } from '../../../redux/selectors/common';

import LogoWhite from './src/tradegraf-white.svg';
import LogoBlack from './src/tradegraf-black.svg';

export const Logo = ({ darkMode, classString, href }) => {
	const isDarkMode = useSelector(darkModeSelector.getDarkMode);

	return (
		<a className={classString || 'w-36'} href={href}>
			<img src={isDarkMode || darkMode ? LogoWhite : LogoBlack} alt="Tradegraf Logo" />
		</a>
	);
};
