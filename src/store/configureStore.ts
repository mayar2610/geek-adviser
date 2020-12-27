import { applyMiddleware, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootState, rootReducer } from './rootReducer';

export default function configureStore(
  preloadedState?: rootState,
): Store<rootState> {
  return createStore(
    rootReducer,
    preloadedState || {},
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
