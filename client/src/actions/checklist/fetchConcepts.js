export default function fetchConcepts(type = "all", id = null) {
  switch (type) {
    case "all":
      return dispatch => {
        dispatch({ type: "FETCH_CONCEPTS" });
        return Promise.all([
          fetch("/api/v1/concepts"),
          fetch("/api/v1/nouns"),
          fetch("/api/v1/adjectives")
        ])
          .then(
            responses => Promise.all(responses.map(r => r.json())),
            error => {
              console.log(error);
            }
          )
          .then(([concepts, nouns, adjectives]) => {
            console.log(concepts);
            return dispatch({
              type: "RECEIVE_CONCEPTS",
              concepts,
              adjectives,
              nouns
            });
          });
      };
    case "concept":
    case "adjective":
    case "noun":
      return (dispatch) => {
        dispatch({ type: "FETCH_CONCEPTS" });
        return (
          fetch(`/api/v1/${type}s`)
        )
        .then(handleResponse)
        .then(data => {
          console.log(data);
          return dispatch({
            type: "RECEIVE_CONCEPTS",
            [`${type}s`]: data
          })
        })
      }
      default:
        console.log("Invalid type given to fetchConcepts():", type)
  }
}

function handleResponse(response) {
  return response.json().then(json => {
    if (response.ok) {
      return json;
    } else {
      return Promise.reject(json);
    }
  });
}