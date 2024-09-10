import React from "react";
import Media from "../../components/media";
import "./home.style.css";
import Test from "../test/test";

const Home = () => {
  return (
    <>
    <Test></Test>
      <div className="right_bottom_rectangle">
        <Media></Media>
      </div>{" "}
      <div className="bottom_mask"></div>
    </>
  );
};

export default Home;
