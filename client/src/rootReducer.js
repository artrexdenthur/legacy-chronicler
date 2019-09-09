import { combineReducers } from 'redux';
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