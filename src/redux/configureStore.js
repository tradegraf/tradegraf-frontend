 import { createStore, applyMiddleware, compose } from 'redux';
 import { routerMiddleware } from 'connected-react-router';
 import createSagaMiddleware from 'redux-saga';

 import createReducer from './reducers';

 export default function configureStore(initialState = {}, history) {
   let composeEnhancers = compose;
   const reduxSagaMonitorOptions = {
     onError: error => {
       console.error(error);
     },
   };

   if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

   const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

   const middlewares = [sagaMiddleware, routerMiddleware(history)];

   const enhancers = [applyMiddleware(...middlewares)];

   const store = createStore(
     createReducer(),
     initialState,
     composeEnhancers(...enhancers),
   );

   // Extensions
   store.runSaga = sagaMiddleware.run;
   store.injectedReducers = {}; // Reducer registry
   store.injectedSagas = {}; // Saga registry

   return store;
 }
