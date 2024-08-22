import React from "react";
import contacts_data from "../../contactsData";

//Styles
import "./media.style.css";

const projects_data = [
  {
    id: 1,
    title: "vpmu-studio",
    link: "https://www.vpmu-studio.co.uk/",
    content: "Apr 2023/Design & Dev",
  },
  {
    id: 2,
    title: "j&l Gradzkie",
    link: "https://www.jl-gradzkie.pl/",
    content: "Sep 2022/Design",
  },
];

function Media() {
  return (
    <>
      <div className="flex items-center justify-end margin_top_media mb-4 ">
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "black",
          }}
          className="me-2"
        ></div>
        <p className="text text-right font-bold ">Projects</p>
      </div>

      {projects_data.map((project) => (
        <div className="flex items-center justify-end ">
          <p className="text font-bold me-20">{project.content}</p>
          <a href={project.link} className="title block text-right">
            {project.title}
          </a>
        </div>
      ))}

      <div className="flex items-center justify-end mt-12 mb-4">
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "black",
          }}
          className="me-2"
        ></div>
        <p className="text text-right font-bold ">Contact</p>
      </div>

       {/* <div className="mb-52">
      {contacts_data.map((contact) => (
        <a href={contact.link} className="title ms-40 block text-right">
          {contact.title}
        </a>
      ))}
      </div> */}
      <div className="mb-52">
      {contacts_data.map((contact) => (
        <div className="flex  items-center justify-end ">
          <img src={contact.img_src} className="icons_media"></img>
          <a href={contact.link} className="title ms-10 block text-right">
            {contact.title}
          </a>
        </div>
      ))}
      </div>
    </>
  );
}

export default Media;
