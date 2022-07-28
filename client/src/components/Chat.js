import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import styles from "./chat.module.css";

const Chat = ({ socket, username, room, messageData, closeChatHandler }) => {
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
    });
  }, [socket]);
  

  let clientMessage = <div className={styles.message} style={{justifyContent: "flex-start"}}>
    <div>
      <div className={styles.messageContent}>
        <p>{messageData.message}</p>
      </div>
      <div className={styles.messageMeta}>
        <p className={styles.time}>{messageData.time}</p>
        <p className={styles.author}>{messageData.author}</p>
      </div>
    </div>
  </div>;

  return(
    <div className={styles.chatSection}>
      <div className={styles.chat}>
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <div className={styles.room}>
              <div className={styles.onlineDot}></div>
              <p>Live chat with our alpaca consultant</p>
              <div className={styles.closeButton} onClick={() => closeChatHandler()}>&#10006;</div>
            </div>
          </div>
          <div className={styles.chatBody}>
            <ScrollToBottom className={styles.messageContainer}>
              {clientMessage}
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
            </ScrollToBottom>
          </div>
          <div className={styles.chatFooter}>
            <input type="text" placeholder="Write here" value={currentMessage} onChange={currentMessageHandler} onKeyPress={(event) => {event.key === "Enter" && sendMessage()}} />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Chat;