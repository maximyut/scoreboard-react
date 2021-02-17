import { CHANGE_POINTS_AKA, CHANGE_POINTS_AO, RESET_POINTS, SET_SENSHU } from '../types';

const initialState = {
  pointsAka: 0,
  pointsAo: 0,
  senshu: 'no',
};

export const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POINTS_AKA:
      if (state.pointsAka + action.payload < 0) {
        return { ...state };
      } else {
        return {
          ...state,
          pointsAka: state.pointsAka + action.payload,
        };
      }

    case CHANGE_POINTS_AO:
      if (state.pointsAo + action.payload < 0) {
        return { ...state };
      } else {
        return {
          ...state,
          pointsAo: state.pointsAo + action.payload,
        };
      }

    case SET_SENSHU:
      return { ...state, senshu: action.payload };
    case RESET_POINTS:
      return {...initialState}
    default:
      return state;
  }
};
