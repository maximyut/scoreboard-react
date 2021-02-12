import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/rootReducer'
import { createMemoryHistory } from 'history';

export const history = createMemoryHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  );

  return store;
}