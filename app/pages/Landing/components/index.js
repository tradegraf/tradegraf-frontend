import Loadable from '@app/utils/loadable';

export const AuthModal = Loadable(() => import(/* webpackPrefetch: true */ './AuthModal'));
