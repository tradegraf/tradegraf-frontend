import React from 'react';

import Link from '../../components/Atoms/Link';

export const Sidebar = () => {
	return (
    <div className="h-screen hidden lg:block relative w-80">
      <div className="h-full">
        <nav className="mt-10 px-6 ">
          <Link.SidebarItem>Link</Link.SidebarItem>
          <Link.SidebarItem selected>Link</Link.SidebarItem>
          <Link.SidebarItem>Link</Link.SidebarItem>
          <Link.SidebarItem>Link</Link.SidebarItem>
        </nav>
      </div>
    </div>
	);
};
