import fetchConcepts from './fetchConcepts'

export default function submitNewConcept(concept) {
  return (dispatch, getState) => {
    dispatch({ type: "POST_CONCEPT" });
    let post_obj = {
      method: "POST",
      headers: {
        'X-CSRF-Token': getState().csrfToken,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    console.log(concept.type)
    switch (concept.type) {
      case "concept":
        let { adjective_id, noun_id } = concept;
        return fetch(
          // using ids
          "/api/v1/concepts", {
            ...post_obj,
            body: JSON.stringify({
              adjective_id,
              noun_id
            })
          }
        )
          .then(handleResponse)
          .then(data => {
            console.log(data)
            return dispatch(fetchConcepts(concept.type))
          })
          .catch(error => console.log(error));

      case "adjective":
      case "noun":
        // debugger
        return fetch(`/api/v1/${concept.type}s`, {
          ...post_obj,
          body: JSON.stringify({
            name: concept.name
          })
        })
          .then(handleResponse)
          .then(data => {
            console.log(data)
            return dispatch(fetchConcepts(concept.type))
          })
          .catch(error => console.log(error));

      default:
        return console.log("Invalid type");
    }
  };
}

function handleResponse(response) {
  console.log(response)
  return response.json().then(json => {
    if (response.ok) {
      return json;
    } else {
      return Promise.reject(json);
    }
  });
}
