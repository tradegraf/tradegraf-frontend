import axios from 'axios';

import commonInterceptor from './interceptor';
import { ENVIRONMENT } from '../../config';

const instance = axios.create({
	baseURL: `${ENVIRONMENT.REACT_APP_API_GATEWAY_URI}/v1`,
});

commonInterceptor(instance);

export default instance;
