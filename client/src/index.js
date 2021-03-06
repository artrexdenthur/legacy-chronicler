// Basic React and components
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainNav from "./components/MainNav";
import Conceptualizer from "./components/conceptualizer/Conceptualizer";
import LegacyContainer from "./components/legacy/legacyContainer"
import Container from "react-bootstrap/Container";
import 'styles/custom'

// React Redux, Thunk, and related concerns
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import initial_state from "./redux/initial_state";

// Redux Token Authorization, to talk to Devise_token_auth
import { verifyCredentials } from "./redux-token-auth-config";
import RegisterPage from "./components/auth/RegisterPage";
import SignInPage from "./components/auth/SignInPage";
import axios from 'axios' // RTA uses axios and we'll need to configure it for Rails CSRF tokens below


// React Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap"; // Accepts the same parameters as React Router's <NavLink>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Necessary to use the Redux Devtools and other middleware at the same time
const store = createStore(
  rootReducer,
  initial_state,
  composeEnhancers(applyMiddleware(thunk))
);

let csrfToken = document.getElementsByName("csrf-token")[0].content
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken
verifyCredentials(store); 

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MainNav />
      <Container fluid className="text-center mt-3 px-5">
        <Route path="/" exact component={App} />
        <Route path="/legacies" component={LegacyContainer} />
        <Route path="/sign_in" component={SignInPage} />
        <Route path="/sign_up" component={RegisterPage} />
        <Route path="/conceptualizer" component={Conceptualizer} />
      </Container>
    </Router>
    {/* <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    /> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
