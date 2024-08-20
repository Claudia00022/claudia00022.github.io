import React from "react";
import Media from "../../components/media";
import "./home.style.css";

const Home = () => {
  return (
    <>
      <div className="cont">
        <div className="rel">
          <div className="abs">
            <Media></Media>
          </div>
          <div className="opac"></div>
        </div>
      </div>{" "}
    </>
  );
};

export default Home;
