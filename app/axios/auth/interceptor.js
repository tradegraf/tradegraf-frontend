import _ from 'lodash';

import { HTTP_STATUS_CODE } from '@app/shared/constants';
import { clearLocalStorage } from '@app/utils/localStorage';

/**
 * Authentication interceptor for Axios instances.
 * @param {AxiosInstance} instance
 * @return {AxiosInstance} instance
 */

export default function authInterceptor(instance) {
	instance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
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
