import React, { useState } from 'react';

import io from "socket.io-client";

import Chat from './components/Chat';

import './App.css';

const socket = io.connect("http://localhost:3001");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  };

  const roomHandler = (event) => {
    setRoom(event.target.value)
  };

  const joinRoom = (event) => {
    event.preventDefault();

    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }

    setUsername("");
    setRoom("")
  };

  return (
    <div className="App">
      <h1>Hey, hi, hello</h1>
      <h2>Wanna talk? Join some room!</h2>
      <div className="signSection">
        <h1>Sign in!</h1>
        <form className="form" onSubmit={joinRoom}>
          <div className="control">
            <label htmlFor="username">Your name</label>
            <input type="text" id="username" value={username} onChange={usernameHandler} />
          </div>
          <div className="control">
            <label htmlFor="room">Room ID</label>
            <input type="text" id="room" value={room} onChange={roomHandler} />
          </div>
          <button>Join room</button>
        </form>
      </div>
      <Chat socket={socket} username={username} room={room} />
    </div>
  );
}

export default App;
