import { SET_TIME, START_TIME, STOP_TIME } from "../types"

const initialState = {
  going: false,
  minutes: 0,
  seconds: 0,
  dseconds: 0
}

export const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      return {...state, time: action.payload}
    case START_TIME:
      return {...state, going: true}
    case STOP_TIME:
      return {...state, going: false}
    default: return state
  }
}
