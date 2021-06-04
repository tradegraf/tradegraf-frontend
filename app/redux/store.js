import history from '@app/utils/history';
import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState, history);

export default store;
