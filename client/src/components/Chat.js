import React, { useState } from "react";

import styles from "./chat.module.css";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");

  const currentMessageHandler = (event) => {
    setCurrentMessage(event.target.value);
  };

  return(
    <div className={styles.chatSection}>
      <p>Chat Room - Live</p>
      <div className={styles.chatHeader}></div>
      <div className={styles.chatBody}></div>
      <div className={styles.chatFooter}>
        <input type="text" placeholder="Write here" value={currentMessage} onChange={currentMessageHandler} />
        <button>&#9658;</button>
      </div>
    </div>
  )
};

export default Chat;