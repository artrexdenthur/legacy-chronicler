import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import initial_state from "./redux/initial_state";
import App from "./App";
import Nav from "./components/Nav";
import { verifyCredentials } from "./redux-token-auth-config";
import { LinkContainer } from "react-router-bootstrap"; // Accepts the same parameters as React Router's <NavLink>
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initial_state,
  composeEnhancers(applyMiddleware(thunk))
);
verifyCredentials(store);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <Route path="/" exact component={App} />
    </Router>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
