import { ADD_TIME, SET_TIME, START_TIME, STOP_TIME, SUB_TIME } from '../types';

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

export function addTime(value) {
  return {
    type: ADD_TIME,
    payload: value,
  };
}

export function subTime(value) {
  return {
    type: SUB_TIME,
    payload: value,
  };
}
