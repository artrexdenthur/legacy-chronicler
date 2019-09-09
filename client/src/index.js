import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import './index.css';
import { rootReducer } from './rootReducer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import { About } from './components/About'
import { Navbar } from './components/Navbar'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Navbar />
      <Route exact path='/' render={App} />
      <Route exact path='/about' render={About} />
    </Router>
  </Provider>, document.getElementById('root')
);