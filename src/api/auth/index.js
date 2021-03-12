import authAxios from '../../axios/auth';
import axios from '../../axios/common';

export const login = ({ email }) => {
	// return authAxios({
	//   method: 'POST',
	//   url: '/login',
	//   data: { email },
	// }).then(response => {
	//   return response.data;
	// });
};

export const authTempToken = ({ tempToken }) => {
	// return authAxios({
	//   method: 'POST',
	//   url: '/login/authTempToken',
	//   data: { tempToken },
	// }).then(response => {
	//   return response.data;
	// });
};

export const logout = ({ userId: user, token }) => {
	// return axios({
	//   method: 'POST',
	//   url: '/logout',
	//   headers: { user, token },
	//   data: {},
	// }).then(response => {
	//   return response.data;
	// });
};
