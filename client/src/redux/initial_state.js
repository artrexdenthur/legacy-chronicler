const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        firstName: null
      }
    }
  },
  csrfToken: document.getElementsByName("csrf-token")[0].content
  // All your other state
}

export default initialState