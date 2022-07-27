import React, { useEffect, useState } from "react";

import Contacts from "../components/Admin/Contacts";
import ChatContainer from "../components/Admin/ChatContainer";

import styles from "../components/Admin/admin.module.css";

function parse(obj) {
 let tmp_arr = []
 let tmp_arr_msg = []
  for (const key in obj) {
    let elem = {}
    elem.id = key
    for (const key1 in obj[key].msgs) {
      let message = {}
      let tmp = obj[key].msgs[key1]
      // console.log(tmp)
      message.author = tmp.author
      message.message = tmp.message
      message.time = tmp.time
      tmp_arr_msg.push(message)
    }
    elem.messages = tmp_arr_msg
    tmp_arr_msg = []
    // console.log(elem)
    tmp_arr.push(elem)
  }
  return tmp_arr
}

const Admin = () => {
  const [contacts, setContacts] = useState();
  const [currentChat, setCurrentChat] = useState(undefined);
  const [error, setError] = useState(null);

  const fetchContactsHandler = async () => {
    setError(null);
    try {
      const response = await fetch('https://chat-app-a4821-default-rtdb.firebaseio.com/chats.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      let map1 = []
      const data = await response.json();

      map1 = parse(data)
      let tmp = {
        contacts:  map1
      }
      setContacts(tmp);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchContactsHandler();
  }, []);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
    // console.log(chat)
  };

  return(
    <div className={styles.adminSection}>
      <p className={styles.title}>Alpaca Farm Admin Panel</p>
      <div className={styles.adminContainer}>
        {contacts && <Contacts data={contacts} changeChat={handleChatChange} />}
        <ChatContainer currentChat={currentChat} />
      </div>
    </div>
  )
};

export default Admin;