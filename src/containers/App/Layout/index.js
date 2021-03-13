import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useLocation } from 'react-router-dom';

// import { INITIAL_ROUTE } from '../../../routes';

import AppContent from './AppContent';
import { MainLayout } from '../../../components/Layout';
import { DashboardHeader } from '../../Header';
import { Sidebar } from '../../Sidebar';

// import TGLocalStorage from '../../../utils/tgLocalStorage';

// import AppSidebar from './AppSidebar';
// import AppHeader from './AppHeader';
// import AppContent from './AppContent';
// import menus from './AppSidebar/menus';
// import TGLocalStorage from '../../../utils/tgLocalStorage';

import { darkModeSelector } from '../../../redux/selectors/common';

import { Creators as CommonCreators } from '../../../redux/actions/common';

const AppLayout = () => {
	const dispatch = useDispatch();
	// const localStorage = new TGLocalStorage({ prefix: 'tg', key: 'darkMode' });
	// const darkMode = localStorage.getItem();

	const isDarkMode = useSelector(darkModeSelector.getDarkMode);
	// const history = useHistory();
	// const location = useLocation();
	// const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
	// const [currentMenuKey, setCurrentMenuKey] = useState(INITIAL_ROUTE.key);

	const handleThemeModeChange = () => {
		dispatch(CommonCreators.setDarkMode({ data: !isDarkMode }));
	};

	// const getAndUpdateCurrentMenu = ({ prefix, key, pathName }) => {
	// 	const localStorage = new TGLocalStorage({ prefix, key });
	// 	const storageMenu = localStorage.getItem();

	// 	const currentMenu = menus.find(menu => {
	// 		return menu.path === pathName;
	// 	});

	// 	if (currentMenu && (!storageMenu || currentMenu.key !== storageMenu.key)) {
	// 		localStorage.setItem({ value: { key: currentMenu.key } });
	// 		return currentMenu.key;
	// 	}

	// 	return storageMenu.key;
	// };

	// useEffect(() => {
	// 	const currentMenu = getAndUpdateCurrentMenu({
	// 		prefix: 'CURRENT',
	// 		key: 'MENU_KEY',
	// 		pathName: location.pathname,
	// 	});

	// 	if (currentMenu) {
	// 		setCurrentMenuKey(currentMenu);
	// 	}
	// }, [location, setCurrentMenuKey]);

	// const handleSidebarMenuClick = path => {
	// 	if (path && location.pathname !== path) {
	// 		history.push(path);
	// 	}
	// };

	// const toggleSidebar = () => {
	// 	return setIsSidebarCollapsed(!isSidebarCollapsed);
	// };
	return (
		<MainLayout theme={isDarkMode === true ? 'dark' : ''}>
			<DashboardHeader darkModeToggle={handleThemeModeChange} />
			<div className="flex items-start">
				<Sidebar />
				<AppContent />
			</div>
			{/* <AppSidebar
				menus={menus}
				currentKey={currentMenuKey}
				onMenuClick={handleSidebarMenuClick}
				isCollapsed={isSidebarCollapsed}
			/> */}
			{/* <Layout className="site-layout">
				<AppHeader isSidebarCollapsed={isSidebarCollapsed} onSidebarToggled={toggleSidebar} />
				<AppContent isSidebarCollapsed={isSidebarCollapsed} />
			</Layout> */}
		</MainLayout>
	);
};

export default AppLayout;
