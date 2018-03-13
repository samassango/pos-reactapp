
import React from 'react';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import appReducer from './reducers';
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
    devTools({
      name: 'posApp', realtime: true,
    }),
  );

  const store = createStore(appReducer, enhancer);
  persistStore(store, { storage: localStorage }, onCompletion);

  return store;
}
