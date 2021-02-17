import { SET_WINNER } from '../types';

const initialState = {
  winner: null,
};

export const winnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINNER:
      return { ...state, winner: action.payload };
    default:
      return state;
  }
};
