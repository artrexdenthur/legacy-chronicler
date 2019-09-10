import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import APITest from './components/APITest'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Legacy Chronicler</h1>
      <p>Please hold while we attempt to get an API working...</p>
      <p>API URL == {process.env.API_URL}</p>
      <APITest />
    </div>
  );
}

export default App;
