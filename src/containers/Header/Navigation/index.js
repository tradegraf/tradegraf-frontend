import React from 'react';

import './index.css';
import Link from '../../../components/Atoms/Link';

const Navigation = () => {
	return (
		<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
			<Link href="/">About</Link>
			<Link href="/">Blog</Link>
			<Link href="/">FAQ</Link>

			<Navigation.SignForm />
		</nav>
	);
};

Navigation.SignForm = () => {
	return (
		<div className="flex flex-wrap items-center text-base justify-center sign-container">
			<Link.Text href="/signin">Sign in</Link.Text>
			<Link.Pill href="/signup">Sign up</Link.Pill>
		</div>
	);
};

export default Navigation;
