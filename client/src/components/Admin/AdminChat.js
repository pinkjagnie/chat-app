import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import styles from "./adminChat.module.css";

import io from "socket.io-client";

const socket = io.connect("http://server.pinkjagnie.pl");

const AdminChat = ({ socket, username, room, currentChat, closeClientChat }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const currentMessageHandler = (event) => {
    setCurrentMessage(event.target.value);
  };

  const sendMessage = async () => {
    if(currentMessage !== "") {
      const messageData = {
        room: room.replace("^", "."),
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      }
      socket.emit("join_room", room.replace("^", "."));
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data])
    })
  }, [socket]);


  let clientMessage = currentChat.messages.map((messageContent) => {
    return(
      <div className={styles.message} style={{justifyContent: "flex-end"}} key={messageContent.time}>
        <div>
          <div className={styles.messageContent} style={{backgroundColor: "cornflowerblue"}}>
            <p>{messageContent.message}</p>
          </div>
          <div className={styles.messageMeta}>
            <p className={styles.time}>{messageContent.time}</p>
            <p className={styles.author}>{messageContent.author}</p>
          </div>
        </div>
      </div>
    )});

  return(
    <div className={styles.chatSection}>
      <div className={styles.chat}>
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <div className={styles.room}>
              <div className={styles.onlineDot}></div>
              <p>Live chat with {currentChat.id}</p>
              <div className={styles.closeButton} onClick={() => closeClientChat()}>&#10006;</div>
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

export default AdminChat;