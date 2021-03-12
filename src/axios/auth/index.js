import axios from 'axios';

import authInterceptor from './interceptor';
import { ENVIRONMENT } from '../../config';

const instance = axios.create({ baseURL: `${ENVIRONMENT.REACT_APP_API_GATEWAY_URI}/v1` });

authInterceptor(instance);

export default instance;
