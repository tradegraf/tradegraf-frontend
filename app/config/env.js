import _ from 'lodash';

const hostname = _.get(window, 'location.hostname', '');
const isLocalHost = hostname === 'localhost' || hostname === '127.0.0.1';
const defaultEnv = isLocalHost ? 'local' : 'development';

export default {
  BASE_URI: '/',
  ENV: process.env.REACT_APP_ENV || defaultEnv,
  SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN,
  REACT_APP_VERSION: process.env.REACT_APP_VERSION || 'N/A',
  REACT_APP_API_GATEWAY_URI: process.env.REACT_APP_API_GATEWAY_URI,
};
