import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { timeReducer } from './timeReducer';
import { pointsReducer } from './pointsReducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    time: timeReducer,
    points: pointsReducer,
  });

export default createRootReducer;
