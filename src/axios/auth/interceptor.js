import _ from 'lodash';

import { HTTP_STATUS_CODE } from '../../shared/constants';

import { clearLocalStorage } from '../../utils/localStorage';

/**
 * Authentication interceptor for Axios instances.
 * @param {AxiosInstance} instance
 * @return {AxiosInstance} instance
 */
export default function authInterceptor(instance) {
	instance.interceptors.response.use(
		response => response,
		error => {
			const httpResponseStatusCode = _.get(error, 'response.status');
			if (
				httpResponseStatusCode &&
				(httpResponseStatusCode === HTTP_STATUS_CODE.FORBIDDEN ||
					httpResponseStatusCode === HTTP_STATUS_CODE.UNAUTHORIZED)
			) {
				// TODO: (MIGHT-TODO) "store.dispatch(Creators.logoutRequest())" stuck
				//  inside at "yield take(Types.LOGOUT_REQUEST)" part,
				//  so i fixed it quickly with clearLocalStorage();
				// store.dispatch(Creators.logoutRequest());
				clearLocalStorage();
			}
			return Promise.reject(error);
		},
	);
}
