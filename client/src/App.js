import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import APITest from './components/APITest'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Legacy Chronicler</h1>
      <p>Please hold while we attempt to get an API working for us now...</p>
      <p>API URL == {process.env.keys}</p>
      <p>Some data is </p>
      <APITest />
    </div>
  );
}

export default App;
