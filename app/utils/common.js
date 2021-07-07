import _ from 'lodash';

export const getStateObject = (state, reducerKey, objectKey, { initialValue = {} } = {}) =>
	_.get(state, `[${reducerKey}].${objectKey}`, initialValue);
