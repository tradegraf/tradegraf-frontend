import axios from 'axios';
import Cookies from 'js-cookie';

import authInterceptor from './interceptor';
import { ENVIRONMENT } from '../../config';

// TODO: Replace with api-gateway
const instance = axios.create({
	baseURL: `${ENVIRONMENT.REACT_APP_AUTH_SERVICE_URI}/v1`,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookies.get('token')}`,
	},
});

authInterceptor(instance);

export default instance;
