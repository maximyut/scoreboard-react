import { CHANGE_WARNING, RESET_WARNINGS } from '../types';
import { setWinner } from './winner';

export function changeWarning(value) {
  return (dispatch, setState) => {
    dispatch({ type: CHANGE_WARNING, payload: value });
    const akac1h = value.akac1h,
      akac2h = value.akac2h,
      aoc1h = value.aoc1h,
      aoc2h = value.aoc2h;
    if (akac1h || akac2h) {
      dispatch(setWinner("ao"));
    } else if (aoc1h || aoc2h) {
      dispatch(setWinner("aka"));
    }
  };
}

export function resetWarnings(value) {
  return {
    type: RESET_WARNINGS,
  };
}
