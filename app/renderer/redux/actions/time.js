import { CHANGE_TIME, SET_TIME, START_TIME, STOP_TIME } from '../types';
import { setWinner } from './winner';
let timer,
  s = true;

export function setTime(value) {
  return {
    type: SET_TIME,
    payload: value,
  };
}

export function startTime() {
  return (dispatch, getState) => {
    const { time } = getState();
    let currentTime = time.time,
      state = time.going;
    s = true;
    if (!state && currentTime > 0) {
      timer = setInterval(() => {
        if (s == false) {
          clearInterval(timer);
          dispatch(stopTime());
        } else if (currentTime == 0) {
          clearInterval(timer);
          dispatch(stopTime());
          dispatch(setWinner());
        } else {
          dispatch({ type: START_TIME });
          currentTime = currentTime - 1;

        }
      }, 100);
    }
    console.log(time)
  };
}

export function stopTime() {
  s = false;
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
