import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import "./index.css";
import { rootReducer } from "./reducers/rootReducer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import { About } from "./components/About";
import { TopNav } from "./components/TopNav";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

ReactDOM.render(
  <Provider store={store}>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <Router>
      <TopNav />
      <Route exact path="/app" render={App} />
      <Route exact path="/app/about" render={About} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
