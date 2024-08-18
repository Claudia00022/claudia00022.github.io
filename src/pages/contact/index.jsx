import React from "react";
import InstaIcon from "../../assets/photos/insta.png";
import MailIcon from "../../assets/photos/mail.png";
import LinkIcon from "../../assets/photos/linkedin.png";
import "./contact.style.css";

const contacts_data = [
  {
    id: 1,
    img_src: MailIcon,
    title: "email",
    link: "mailto:klaudiaforysiak@gmail.com",
  },
  {
    id: 2,
    img_src: InstaIcon,
    title: "instagram",
    link: "https://www.instagram.com/cla_udiaui/",
  },
  {
    id: 3,
    img_src: LinkIcon,
    title: "linkedIn",
    link: "https://www.linkedin.com/in/klaudia-forysiak-264895318/",
  },
];

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
