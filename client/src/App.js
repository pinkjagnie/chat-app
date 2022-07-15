import React, { Component } from 'react';

import io from "socket.io-client";

import './App.css';

const socket = io.connect("http://localhost:3001");

const App = () => {
  return (
    <div className="App">
      <h1>Hey, hi, hello</h1>
    </div>
  );
}

export default App;
