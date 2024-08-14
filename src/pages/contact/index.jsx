import React from "react";
import InstaIcon from '../../assets/photos/insta.png';
import MailIcon from '../../assets/photos/mail.png';
import LinkIcon from '../../assets/photos/linkedin.png';
import "./contact.style.css";

const Contact = () => {
  return (
    <>
      <div className="content_contact">
        <div className="flex  items-center"><img src={MailIcon} alt="instagramIcon" className="icons"></img><a className="text title_contact">email</a></div>
        <div className="flex items-center"><img src={InstaIcon} className="icons"></img><a className="text title_contact">instagram</a></div>
        <div className="flex items-center"><img src={LinkIcon} className="icons"></img><a className="text title_contact">linkedIn</a></div>
      </div>
      <div className="opac"></div>
    </>
  );
};

export default Contact;
