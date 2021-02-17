import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/rootReducer';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { electronEnhancer } from 'redux-electron-store';

import {
  forwardToMain,
  forwardToRenderer,
  triggerAlias,
  replayActionMain,
  replayActionRenderer,
} from 'electron-redux';

export const history = createMemoryHistory();

export default function configureStore(initialState, scope = 'renderer') {
  let middleware = [thunk];

  if (!process.env.NODE_ENV) {
    // middleware.push(logger);
  }

  if (scope === 'renderer') {
    middleware = [
      forwardToMain,
      routerMiddleware(history), // for dispatching history actions
      ...middleware,
    ];
  }

  if (scope === 'main') {
    middleware = [triggerAlias, ...middleware, forwardToRenderer];
  }

  const enhanced = [applyMiddleware(...middleware)];

  const rootReducer = createRootReducer(history);

  const enhancer = compose(...enhanced);

  const store = createStore(rootReducer, initialState, enhancer);

  if (scope === 'main') {
    replayActionMain(store);
  } else {
    replayActionRenderer(store);
  }

  return store;
}
