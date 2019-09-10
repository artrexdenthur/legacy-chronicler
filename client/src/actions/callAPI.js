export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: "REQUEST_USERS"});
    return fetch()
  }
}