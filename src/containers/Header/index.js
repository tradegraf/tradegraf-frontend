import React from 'react';

import { Logo } from '../../components/Atoms/Logo';
import { DarkModeToggle } from '../../components/DarkModeToggle';

import Navigation from './Navigation';

const Header = () => {
	return (
		<header classNameName="text-gray-600 body-font">
			<div classNameName="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Logo />
				<Navigation />
			</div>
		</header>
	);
};

const DashboardHeader = props => {
	// const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className="bg-white dark:bg-gray-800">
				<div className="mx-auto px-4 md:px-6">
					<div className="flex items-center justify-between h-16">
						<div className="w-full justify-between flex items-center">
							<Logo />
							<div className="hidden md:flex items-center pt-2 pb-3 px-0">
								<DarkModeToggle themeToggle={props.darkModeToggle} />
								<Navigation.Dashboard />
							</div>
						</div>
						{/* <div className="block">
							<div className="ml-4 flex items-center md:ml-6"></div>
						</div> */}
						<div className="-mr-2 flex md:hidden">
							<DarkModeToggle themeToggle={props.darkModeToggle} />
							<button
								className="text-gray-800 dark:text-gray-50 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
								type="button"
							>
								<svg
									width="20"
									height="20"
									fill="currentColor"
									className="h-8 w-8"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export { Header, DashboardHeader };
