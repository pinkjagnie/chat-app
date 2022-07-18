import React, { useEffect, useState } from "react";

import styles from "./chat.module.css";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

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
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data])
    })
  }, [socket])

  return(
    <div className={styles.chatSection}>
      <p>Chat Room - Live</p>
      <div className={styles.chatBox}>
        <div className={styles.chatHeader}>
          <div className={styles.room}><p>Room: {room}</p></div>
        </div>
        <div className={styles.chatBody}>
          {messageList.map((messageContent) => {
            return <div className={styles.message} style={username === messageContent.author ? {justifyContent: "flex-start"} : {justifyContent: "flex-end"}}>
              <div>
                <div className={styles.messageContent} style={username === messageContent.author ? undefined : {backgroundColor: "cornflowerblue"}}>
                  <p>{messageContent.message}</p>
                </div>
                <div className={styles.messageMeta}>
                  <p className={styles.time}>{messageContent.time}</p>
                  <p className={styles.author}>{messageContent.author}</p>
                </div>
              </div>
            </div>
          })}
        </div>
        <div className={styles.chatFooter}>
          <input type="text" placeholder="Write here" value={currentMessage} onChange={currentMessageHandler} onKeyPress={(event) => {event.key === "Enter" && sendMessage()}} />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    </div>
  )
};

export default Chat;