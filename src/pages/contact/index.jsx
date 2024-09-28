import React from "react";

import "./contact.style.css";
import contacts_data from "../../contactsData";



const Contact = () => {
  return (
    <>
    <div className="h-screen relative">
    <div className="content_contact">
      {contacts_data.map((contact) => (
        <div className="flex  items-center">
          <img src={contact.img_src} className="icons" alt="icons"></img>
          <a href={contact.link} className="text title_contact">
            {contact.title}
          </a>
        </div>
      ))}
    </div>

    </div>
    </>
  );
};

export default Contact;
