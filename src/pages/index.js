import Loadable from '../utils/loadable';

const pages = {
	Dashboard: Loadable(() => import('./dashboard')),
	Login: Loadable(() => import('./login')),
};

export default pages;
