import React, { useState } from "react";

import Chat from "./Chat";

import io from "socket.io-client";

const socket = io.connect("http://server.pinkjagnie.pl");

const Form = () => {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [messageData, setMessageData] = useState([]);

  const messageHandler = (event) => {
    setMessage(event.target.value)
  };

  const roomHandler = (event) => {
    setRoom(event.target.value)
  };

  const startChat = (event) => {
    event.preventDefault();

    if (room !== "" && message !== "") {
      const messageData = {
        room: room,
        author: room,
        message: message,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      }
      socket.emit("join_room", room);
      socket.emit("send_message", messageData)
      setShowChat(true);
      setMessageData(messageData)
    }
  };

  const closeChatHandler = () => {
    setShowChat(false);
    setRoom("");
    setMessage("")
  };

  return(
    <>
      {!showChat ? 
      (<div className="signSection">
        <p>Have any questions? Write to us</p>
        <form className="form" onSubmit={startChat}>
          <div className="control">
            <label htmlFor="userEmail">Your email</label>
            <input type="email" id="userEmail" value={room} onChange={roomHandler} />
          </div>
          <div className="control">
            <label htmlFor="message">Your message</label>
            <textarea rows="7" name="message" value={message} onChange={messageHandler} />
          </div>
          <button>Send</button>
        </form>
      </div>)
      :
      (<Chat socket={socket} room={room} username={room} messageData={messageData} closeChatHandler={closeChatHandler} />)
      }
    </>
  )
};

export default Form;