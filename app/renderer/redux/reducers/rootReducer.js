import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { timeReducer } from "./timeReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    time: timeReducer
  });

export default createRootReducer;
