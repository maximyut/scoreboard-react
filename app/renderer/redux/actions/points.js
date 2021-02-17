import { CHANGE_POINTS_AKA, CHANGE_POINTS_AO, RESET_POINTS, SET_SENSHU } from '../types';
import { setWinner } from './winner';

export function changePointsAka(value) {
  return (dispatch, setState) => {
    dispatch({ type: CHANGE_POINTS_AKA, payload: value });

    const { points } = setState(),
      pointsAka = points.pointsAka + value,
      pointsAo = points.pointsAo;
    console.log(pointsAka, pointsAo);
    if (Math.abs(pointsAka - pointsAo) >= 8) {
      dispatch(setWinner());
    }
  };
}

export function changePointsAo(value) {
  return (dispatch, setState) => {
    dispatch({ type: CHANGE_POINTS_AO, payload: value });
    const { points } = setState(),
      pointsAka = points.pointsAka,
      pointsAo = points.pointsAo + value;
    if (Math.abs(pointsAka - pointsAo) >= 8) {
      dispatch(setWinner());
    }
  };
}

export function setSenshu(value) {
  return {
    type: SET_SENSHU,
    payload: value,
  };
}

export function resetPoints() {
  return {
    type: RESET_POINTS,
  };
}
