import React, { useState } from "react";

import Chat from "./Chat";

import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const Form = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

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
      setShowChat(true);
    }
  };

  return(
    <>
      {!showChat ? 
      (<div className="signSection">
        <p>Have any questions? Write to us</p>
        <form className="form" onSubmit={joinRoom}>
          <div className="control">
            <label htmlFor="username">Your name</label>
            <input type="text" id="username" value={username} onChange={usernameHandler} />
          </div>
          <div className="control">
            <label htmlFor="room">Your message</label>
            <textarea rows="7" name="room" value={room} onChange={roomHandler} />
          </div>
          <button>Send</button>
        </form>
      </div>)
      :
      (<Chat socket={socket} username={username} room={room} />)
      }
    </>
  )
};

export default Form;