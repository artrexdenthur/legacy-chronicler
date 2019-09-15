import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  concepts: conceptsReducer
})

function conceptsReducer(state = { message: {}, concepts: [], nouns: [], adjectives: [] }, action) {
  switch (action.type) {
    case 'FETCH_CONCEPTS':
      return { ...state, message: {title: "Loading", content: "Please wait while the Concepts load"}};
    case 'RECEIVE_CONCEPTS':
      let { concepts, nouns, adjectives } = action
      return { ...state,  message: action.message, concepts, nouns, adjectives}
    default:
      return state
  }
}

export default rootReducer