// import authAxios from '@app/axios/auth';
// import axios from '@app/axios/common';

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
