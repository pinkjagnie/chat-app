import React, { useEffect, useState } from "react";

import styles from "./chat.module.css";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");

  const currentMessageHandler = (event) => {
    setCurrentMessage(event.target.value);
  };

  const sendMessage = async () => {
    if(currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      }
      await socket.emit("send_message", messageData);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data)
    })
  }, [socket])

  return(
    <div className={styles.chatSection}>
      <p>Chat Room - Live</p>
      <div className={styles.chatHeader}></div>
      <div className={styles.chatBody}></div>
      <div className={styles.chatFooter}>
        <input type="text" placeholder="Write here" value={currentMessage} onChange={currentMessageHandler} />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
};

export default Chat;