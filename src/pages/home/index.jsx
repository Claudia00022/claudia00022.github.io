import React from "react";
import Media from "../../components/media";
import "./home.style.css";

const Home = () => {
  return (
    <> 
    <div className="abs classname">
      <div className="mask">
        <Media></Media>
      </div>
      </div>
    {" "}
      <div class="w-12 h-screen bg-slate-50 border fixed top-0 left-0 right-0">
        <a href="#" className="-rotate-90 block" style={{ marginTop: "90vh" }}>
          klaudiaforysiak@gmail.com
        </a>
      </div>
      
    </>
  );
};

export default Home;
