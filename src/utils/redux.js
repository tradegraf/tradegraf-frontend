import _ from 'lodash';

export const getState = ({ state, reduxKey, key, initialState = {} }) => {
  let defaultValue;
  if (key) {
    defaultValue = _.get(initialState, key, {});
    return _.get(state, `[${reduxKey}].${key}`, defaultValue);
  }
  defaultValue = initialState || {};
  return _.get(state, `[${reduxKey}]`, defaultValue);
};
