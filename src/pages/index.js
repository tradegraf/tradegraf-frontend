import Loadable from '../utils/loadable';

const pages = {
	Dashboard: Loadable(() => import('./dashboard')),
};

export default pages;
