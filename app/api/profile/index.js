import axios from '@app/axios/common';

export const getExchangeConnections = ({ data }) =>
	axios({
		method: 'GET',
		url: '/exchange/',
		headers: {
			user_id: data.user_id,
		},
	}).then((response) => response.data);

export const createExchangeConnection = ({ data, userId }) =>
	axios({
		method: 'POST',
		url: '/exchange/',
		headers: {
			user_id: userId,
		},
		data,
	})
		.then((response) => ({
			data: response.data,
			error: null,
		}))
		.catch((error) => ({
			data: null,
			error,
		}));

export const deleteExchangeConnection = ({ userId, exchangeId }) =>
	axios({
		method: 'DELETE',
		url: `/exchange/${exchangeId}`,
		headers: {
			userId,
		},
	}).then((response) => response.data);
