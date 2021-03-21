/* eslint-disable arrow-body-style */
import React from 'react';

import Link from '../../components/Atoms/Link';

export const Sidebar = props => {
	// const { onMenuClick, menus, currentKey } = props;

	// const getMenuItems = () =>
	// 	menus.map(menu => (
	// 		<MenuItem
	// 			key={menu.key}
	// 			icon={menuIcon}
	// 			className={classes.toggleIcon}
	// 			onClick={() => onMenuClick(menu.path)}
	// 		>
	// 			{t(menu.name)}
	// 		</MenuItem>
	// 	));

	return (
		<div className="h-screen hidden lg:block relative w-80">
			<div className="h-full">
				<nav className="mt-10 px-2">
					<Link.SidebarItem>Link</Link.SidebarItem>
					<Link.SidebarItem selected>Link</Link.SidebarItem>
					<Link.SidebarItem>Link</Link.SidebarItem>
					<Link.SidebarItem>Link</Link.SidebarItem>
				</nav>
			</div>
		</div>
	);
};
