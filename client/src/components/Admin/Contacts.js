import React, { useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import "./contacts.css";

const Contacts = (props) => {
  const [currentSelected, setCurrentSelected] = useState(undefined);

  const changeCurrentChat = (contact, index) => {
    setCurrentSelected(index);
    props.changeChat(contact);
    console.log(contact)
  };
  
  return(
    <div className="contactsSection">
      <ScrollToBottom className="contactScroll">
        {props.data.contacts.map((contact, index) => {
          return (
          <div className={`singleContact ${index === currentSelected ? "selected" : ""}`} key={contact.id} onClick={() => changeCurrentChat(contact, index)}>
            <div className="emailContact">
              <p>{contact.id}</p>
            </div>
            <div className="messageContact">
              <p>{contact.messages[contact.messages.length - 1].message}</p>
            </div>
          </div>)
        })}
      </ScrollToBottom>
    </div>
  )
};

export default Contacts;