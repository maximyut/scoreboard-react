import { SET_TIME, START_TIME, STOP_TIME, CHANGE_TIME } from '../types';

const initialState = {
  going: false,
  time: 0,
};

export const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      return {
        ...state,
        time: action.payload,
      };
    case START_TIME:
      return {
        ...state,
        going: true,
        time: state.time - 1,
      };
    case STOP_TIME:
      return { ...state, going: false };
    case CHANGE_TIME:
      if (state.time + action.payload * 10 < 0) {
        return { ...state };
      } else {
        return {
          ...state,
          time: state.time + action.payload * 10,
        };
      }
    default:
      return state;
  }
};
