import { CHANGE_TIME, SET_TIME, START_TIME, STOP_TIME } from '../types';

export function setTime(value) {
  return {
    type: SET_TIME,
    payload: value,
  };
}

export function startTime() {
  return {
    type: START_TIME,
  };
}

export function stopTime() {
  return {
    type: STOP_TIME,
  };
}

export function changeTime(value) {
  return {
    type: CHANGE_TIME,
    payload: value,
  };
}
