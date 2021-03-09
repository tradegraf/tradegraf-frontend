import { createReducer } from 'reduxsauce';
import { produce } from 'immer';

import { Types } from '../actions/loadingBar';

export const INITIAL_STATE = { status: null };

export const show = (currentState = INITIAL_STATE) => {
  return (
    produce(currentState, draftState => {
      Object.assign(draftState, { status: 'show' });
    })
  );
};

export const hide = (currentState = INITIAL_STATE) => {
  return (
    produce(currentState, draftState => {
      Object.assign(draftState, { status: 'hide' });
    })
  );
};

export const reset = (currentState = INITIAL_STATE) => {
  return (
    produce(currentState, draftState => {
      Object.assign(draftState, { status: 'reset' });
    })
  );
};

export const HANDLERS = {
  [Types.SHOW]: show,
  [Types.HIDE]: hide,
  [Types.RESET]: reset,
};

export default createReducer(INITIAL_STATE, HANDLERS);
