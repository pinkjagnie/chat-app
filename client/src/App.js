import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';
import ErrorPage from './pages/ErrorPage';

import "./App.css";

import io from "socket.io-client";

const socket = io.connect("http://server.pinkjagnie.pl");

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
