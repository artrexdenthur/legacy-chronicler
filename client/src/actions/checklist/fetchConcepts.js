export default function fetchConcepts() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_CONCEPTS'});
    return Promise.all([
      fetch('/api/v1/concepts'),
      fetch('/api/v1/nouns'),
      fetch('/api/v1/adjectives')
    ])
      .then(responses => Promise.all(responses.map(r => r.json()))
      , error => {
        console.log(error)
      })
      .then(([concepts, nouns, adjectives]) => {
        console.log(concepts);
        return dispatch({ type: 'RECEIVE_CONCEPTS', concepts, adjectives, nouns})
      })
  }
}