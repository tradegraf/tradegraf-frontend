import _ from 'lodash';

import { getToken, getUser } from '../../redux/selectors/auth';
import { HTTP_STATUS_CODE } from '../../shared/constants';
import { clearLocalStorage } from '../../utils/localStorage';

/**
 * Common interceptor for Axios instances.
 * @param {AxiosInstance} instance
 * @return {AxiosInstance} instance
 */
export default function commonInterceptor(instance) {
	instance.interceptors.request.use(config => {
		const token = getToken();
		const user = getUser();
		Object.assign(config.headers, {
			token,
			user: _.get(user, '_id', ''),
		});

		return config;
	});

	instance.interceptors.response.use(
		response => {
			return response;
		},
		error => {
			const httpResponseStatusCode = _.get(error, 'response.status');
			if (
				httpResponseStatusCode &&
				(httpResponseStatusCode === HTTP_STATUS_CODE.FORBIDDEN ||
					httpResponseStatusCode === HTTP_STATUS_CODE.UNAUTHORIZED)
			) {
				clearLocalStorage();
			}
			return Promise.reject(error);
		},
	);
}
