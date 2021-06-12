import Loadable from '@app/utils/loadable';
import { SPINNER } from '@app/shared/constants';

export const AuthModal = Loadable(
	() => import(/* webpackPrefetch: true */ './AuthModal'),
	SPINNER.FULL_PAGE,
);
