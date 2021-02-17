import { SET_CONTROL_SCOREBOARD, SET_SCOREBOARD } from '../types';

export function setControlScoreboard(value) {
  return {
    type: SET_CONTROL_SCOREBOARD,
    payload: value,
  };
}

export function setScoreboard(value) {
  return {
    type: SET_SCOREBOARD,
    payload: value,
  };
}
