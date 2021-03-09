import React from 'react';

import Logo from '../../components/Atoms/Logo';
import Navigation from './Navigation';

const Header = () => {
	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Logo />
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
