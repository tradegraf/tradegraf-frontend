import React from 'react';

import Link from '../../components/Atoms/Link';

export const Sidebar = () => {
	return (
		<div className="relative">
			<div className="flex flex-col sm:flex-row sm:justify-start">
				<div className="bg-white dark:bg-gray-800 w-72 h-screen">
					<nav className="mt-10 px-6 ">
						<Link.SidebarItem>Link</Link.SidebarItem>
						<Link.SidebarItem selected>Link</Link.SidebarItem>
						<Link.SidebarItem>Link</Link.SidebarItem>
						<Link.SidebarItem>Link</Link.SidebarItem>
					</nav>
				</div>
			</div>
		</div>
	);
};
