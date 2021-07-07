import Loadable from '@app/utils/loadable';

import { SPINNER } from '@app/shared/constants';

const pages = {
	Landing: Loadable(() => import('@app/pages/Landing'), SPINNER.FULL_PAGE),
	Login: Loadable(() => import('@app/pages/Login'), SPINNER.FULL_PAGE),
	Auth: Loadable(() => import('@app/pages/Auth'), SPINNER.FULL_PAGE),
	Dashboard: Loadable(() => import('@app/pages/Dashboard'), SPINNER.FULL_PAGE),
	Profile: Loadable(() => import('@app/pages/Profile'), SPINNER.FULL_PAGE),
};

export default pages;
