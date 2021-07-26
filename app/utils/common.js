import _ from 'lodash';

export const getStateObject = (state, reducerKey, objectKey, { initialValue = {} } = {}) =>
	_.get(state, `[${reducerKey}].${objectKey}`, initialValue);

export const removeWhiteSpaceFromString = (text) => text.split(' ').join('').trim();
