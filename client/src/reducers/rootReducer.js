import { combineReducers } from 'redux';
import userReducer from './usersReducer'
import gamesReducer from './gamesReducer'
import sessionReducer from './sessionReducer'
export const rootReducer = combineReducers({
  api: apiReducer
})

function apiReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "GET_THING":
      return [...state, action.thing];
    default:
      return state;
  }
}