import authAxios from '@app/axios/auth';
import axios from '@app/axios/common';

export const login = ({ email }) =>
  authAxios({
    method: 'POST',
    url: '/login',
    data: { email },
  }).then(response => response.data);

export const authTempToken = ({ tempToken }) =>
  authAxios({
    method: 'POST',
    url: '/login/authTempToken',
    data: { tempToken },
  }).then(response => response.data);

export const logout = ({ userId: user, token }) =>
  axios({
    method: 'POST',
    url: '/logout',
    headers: { user, token },
    data: {},
  }).then(response => response.data);
