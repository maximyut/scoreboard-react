import { SET_TIME, START_TIME, STOP_TIME, ADD_TIME, SUB_TIME } from '../types';
import { setTime } from '../actions/actions';

const initialState = {
  going: false,
  time: 0,
  minutes: 0,
  seconds: 0,
  dseconds: 0,
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
    case ADD_TIME:
      return {
        ...state,
        time: state.time + action.payload * 10,
      };
    default:
      return state;
  }
};
