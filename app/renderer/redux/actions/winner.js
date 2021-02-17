import { SET_WINNER } from '../types';
import { resetWarnings } from './warnings';
import { resetPoints } from './points';
import { setTime } from './time';

export function setWinner(value) {
  return (dispatch, getState) => {
    const { points, warnings } = getState();
    const pointsAka = points.pointsAka,
      pointsAo = points.pointsAo,
      akac1h = warnings.akac1h,
      akac2h = warnings.akac2h,
      aoc1h = warnings.aoc1h,
      aoc2h = warnings.aoc2h,
      senshu = points.senshu;
    console.log(akac1h);
    if (!value) {
      if (pointsAka > pointsAo || aoc1h || aoc2h) {
        dispatch({ type: SET_WINNER, payload: 'aka' });
      } else if (pointsAo > pointsAka || akac1h || akac2h) {
        dispatch({ type: SET_WINNER, payload: 'ao' });
      } else {
        if (senshu == 'aka' || senshu == 'ao') {
          dispatch({ type: SET_WINNER, payload: senshu });
        }
      }
    } else {
      dispatch({ type: SET_WINNER, payload: value });
    }
  };
}

export function resetMatch(value) {
  return (dispatch) => {
    dispatch(resetWarnings());
    dispatch(resetPoints());
    dispatch({ type: SET_WINNER, payload: null });
    dispatch(setTime(value));
  };
}
