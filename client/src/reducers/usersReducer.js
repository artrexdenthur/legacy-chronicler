export default function usersReducer(state = [], action) {
  switch (action.type) {
    case "REQUEST_USERS":
      return state;
    case "RETRIEVE_USERS":
      return state;
    default:
      return state;
  }
}