import React from "react";

import "./contact.style.css";
import contacts_data from "../../contactsData";



const Contact = () => {
  return (
    <>
    <div className="content_contact">
      {contacts_data.map((contact) => (
        <div className="flex  items-center">
          <img src={contact.img_src} className="icons"></img>
          <a href={contact.link} className="text title_contact">
            {contact.title}
          </a>
        </div>
      ))}
    </div>
    <div className="bottom_margin_contact"></div>
    </>
  );
};

export default Contact;
