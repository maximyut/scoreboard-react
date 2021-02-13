import { CHANGE_POINTS_AKA, CHANGE_POINTS_AO, SET_SENSHU, SET_WINNER } from '../types';

const initialState = {
  pointsAka: 0,
  pointsAo: 0,
  senshu: 'null',
  winner: null,
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
      console.log(state.senshu);
      return { ...state, senshu: action.payload };
    case SET_WINNER:
      console.log(state.winner);
      if (state.pointsAka > state.pointsAo) {
        return { ...state, winner: 'aka' };
      } else if (state.pointsAo > state.pointsAka) {
        return { ...state, winner: 'ao' };
      } else {
        if (state.senshu == 'aka') {
          return { ...state, winner: 'aka' };
        } else if (state.senshu == 'ao') {
          return { ...state, winner: 'ao' };
        } else {
          return { ...state, winner: null };
        }
      }
    default:
      return state;
  }
};
