import React, { useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import AdminChat from "./AdminChat";

import styles from "./currentClient.module.css";

const CurrentClient = ({currentChat}) => {
  const [openClientChat, setOpenClientChat] = useState(false);

  const clientChatHandler = () => {
    setOpenClientChat(true);
  };

  console.log(currentChat.messages)

  return(
    <>
    <div className={styles.currentClientSection}>
      <div className={styles.clientBox}>
        <div className={styles.clientHeader}>
          <div className={styles.client}><p>{currentChat.id}</p></div>
        </div>
        <div className={styles.clientBody}>
          <ScrollToBottom className={styles.messageContainer}>
            {currentChat.messages.map((messageContent) => {
              return(
                <div className={styles.message} key={messageContent.time}>
                  <div>
                    <div className={styles.messageContent}>
                      <p>{messageContent.message}</p>
                    </div>
                    <div className={styles.messageMeta}>
                      <p className={styles.time}>{messageContent.time}</p>
                      <p className={styles.author}>{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              )})}
          </ScrollToBottom>
        </div>
        <div className={styles.clientFooter}>
          <button onClick={clientChatHandler}>&#9658; Click here to go to conversation with this client</button>
        </div>
      </div>
    </div>
    {openClientChat && <AdminChat currentChat={currentChat} />}
    </>
  )
};

export default CurrentClient;