import { CHANGE_WARNING, RESET_WARNINGS } from '../types';

const initialState = {
  akac1c: false,
  akac1k: false,
  akac1hc: false,
  akac1h: false,
  akac2c: false,
  akac2k: false,
  akac2hc: false,
  akac2h: false,
  aoc1c: false,
  aoc1k: false,
  aoc1hc: false,
  aoc1h: false,
  aoc2c: false,
  aoc2k: false,
  aoc2hc: false,
  aoc2h: false,
};

export const warningsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WARNING:
      return {
        ...state,
        akac1c: action.payload.akac1c,
        akac1k: action.payload.akac1k,
        akac1hc: action.payload.akac1hc,
        akac1h: action.payload.akac1h,
        akac2c: action.payload.akac2c,
        akac2k: action.payload.akac2k,
        akac2hc: action.payload.akac2hc,
        akac2h: action.payload.akac2h,

        aoc1c: action.payload.aoc1c,
        aoc1k: action.payload.aoc1k,
        aoc1hc: action.payload.aoc1hc,
        aoc1h: action.payload.aoc1h,
        aoc2c: action.payload.aoc2c,
        aoc2k: action.payload.aoc2k,
        aoc2hc: action.payload.aoc2hc,
        aoc2h: action.payload.aoc2h,
      };
    case RESET_WARNINGS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
