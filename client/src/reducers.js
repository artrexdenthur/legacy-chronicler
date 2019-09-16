import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  concepts: conceptsReducer,
  csrfToken: csrfTokenReducer
})

function csrfTokenReducer(state = '') {
  return state
}

function conceptsReducer(state = { message: {}, concepts: [], nouns: [], adjectives: [] }, action) {
  switch (action.type) {
    case 'FETCH_CONCEPTS':
      console.log("Fetching concepts")
      return { ...state, message: {title: "Loading", content: "Please wait while the Concepts load"}};
    case 'RECEIVE_CONCEPTS':
      let { concepts, nouns, adjectives } = action
      console.log("Receiving concepts", action)
      let input =  {
        concepts: concepts ? concepts : state.concepts,
        nouns: nouns ? nouns : state.nouns,
        adjectives: adjectives ? adjectives : state.adjectives
      }
      return { ...state,  message: action.message, ...input }
    case 'POST_CONCEPT':
      console.log("Posting concept")
      return { ...state, message: {title: "Sending", content: "Now posting your entry"}}
    default:
      return state
  }
}

export default rootReducer