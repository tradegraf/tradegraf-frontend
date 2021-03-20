import React from 'react';

import './index.css';
import Link from '../../../components/Atoms/Link';

const Navigation = () => (
		<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
			<Link href="/">About</Link>
			<Link href="/">Blog</Link>
			<Link href="/">FAQ</Link>

			<Navigation.SignForm />
		</nav>
	);

Navigation.SignForm = () => (
		<div className="flex flex-wrap items-center text-base justify-center sign-container">
			<Link.Text href="/signin">Sign in</Link.Text>
			<Link.Pill href="/signup">Sign up</Link.Pill>
		</div>
	);

Navigation.DashboardHidden = () => (
		<div className="hidden md:block">
			<div className="ml-10 flex items-baseline space-x-4">
				<Link.Text href="/">Home</Link.Text>
				<Link.Text href="/">Dashboard</Link.Text>
				<Link.Text href="/">Dummy</Link.Text>
				<Link.Text href="/">Hello</Link.Text>
			</div>
		</div>
	);

Navigation.Dashboard = () => (
		<>
			<Link.Text href="/">Burak Saraloglu</Link.Text>
		</>
	);

export default Navigation;
