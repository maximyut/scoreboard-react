import { CHANGE_POINTS_AKA, CHANGE_POINTS_AO, SET_SENSHU, SET_WINNER } from '../types';

export function changePointsAka(value) {
  return {
    type: CHANGE_POINTS_AKA,
    payload: value,
  };
}

export function changePointsAo(value) {
  return {
    type: CHANGE_POINTS_AO,
    payload: value,
  };
}

export function setSenshu(value) {
  return {
    type: SET_SENSHU,
    payload: value,
  };
}

export function setWinner(value) {
  return {
    type: SET_WINNER,
    payload: value,
  };
}
