import { SET_CONTROL_SCOREBOARD, SET_SCOREBOARD, SET_CONTROL_PANEL } from '../types';

const initialState = {
  main: 'right',
  out: 'left',
};

export const scoreboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCOREBOARD:
      return { ...state, out: action.payload };
    case SET_CONTROL_SCOREBOARD:
      return { ...state, main: action.payload };
    default:
      return state;
  }
};
