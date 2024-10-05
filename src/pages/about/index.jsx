import React from "react";
import "./about.style.css";

function About() {
  return (
    <>
      <div className="relative h-screen" >
      <div className="absolute top-10 right-52 w-6/12 ">
       <h1 className="text-right text-slate-500 title">ABOUT</h1>
        <p className="text font-bold">
          I am freelance frontend developer with a passion for creating dynamic
          and responsive web applications using the React framework.I have honed
          my skills in building user-friendly interfaces and implementing best
          practices in web development. My commitment to staying updated with
          the latest technologies ensures that I deliver modern and efficient
          solutions to my clients. With a passion for art, I thrive on
          collaborating with individuals and businesses that value aesthetics
          and recognize the power of simplicity.
        </p>
        <p className="title text-right text-slate-500">Skills</p>
        <p className="text">
          {" "}
          -Core Technologies: HTML5, CSS3, JavaScript (ES6+)
        </p>
        <p className="text">
          -React: React.js, Redux, Context API, React Router, React Hooks
        </p>
        <p className="text">
          -Styling: CSS Modules, Styled-components, Sass, Tailwind CSS
        </p>
        <p className="text">
          -TypeScript: Strong proficiency in TypeScript for robust and type-safe
          applications
        </p>
        <p className="text mb-52 ">-Version Control: Git, GitHub, GitLab</p>
        </div>
      </div>
    </>
  );
}

export default About;
