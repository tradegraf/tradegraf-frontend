import Loadable from '../utils/loadable';

const pages = {
	Dashboard: Loadable(() => {
		return import('./dashboard');
	}),
};

export default pages;
