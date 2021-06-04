import Loadable from '@app/utils/loadable';

import { SPINNER } from '@app/shared/constants';

const pages = {
  Landing: Loadable(() => import('@app/pages/Landing'), SPINNER.FULL_PAGE),
  Dashboard: Loadable(() => import('@app/pages/Dashboard'), SPINNER.FULL_PAGE),
};

export default pages;
