import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { timeReducer } from './timeReducer';
import { pointsReducer } from './pointsReducer';
import { warningsReducer } from './warningsReducer';
import { winnerReducer } from './winnerReducer';
import { scoreboardReducer } from './scoreboardReducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    time: timeReducer,
    points: pointsReducer,
    warnings: warningsReducer,
    winner: winnerReducer,
    scoreboard: scoreboardReducer
  });

export default createRootReducer;
