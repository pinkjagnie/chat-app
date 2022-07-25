import React, { useCallback, useEffect, useState } from "react";

import Contacts from "../components/Contacts";
import ChatContainer from "../components/ChatContainer";

import styles from "../components/admin.module.css"

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [error, setError] = useState(null);

  const fetchContactsHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch('https://chat-app-a4821-default-rtdb.firebaseio.com/chats.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(response)

      const transformedContacts = data.map((contact) => {
        return {
          id: contact,
          message: contact.msgs.message,
        };
      });
      setContacts(transformedContacts);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchContactsHandler();
    console.log("aaaaaaaaaaaaaa")
  }, []);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return(
    <div className={styles.adminSection}>
      <p className={styles.title}>Alpaca Farm Admin Panel</p>
      <div className={styles.adminContainer}>
        <Contacts contacts={contacts} changeChat={handleChatChange} />
        <ChatContainer currentChat={currentChat} />
      </div>
    </div>
  )
};

export default Admin;