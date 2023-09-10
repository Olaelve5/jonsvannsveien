import React from "react";

import "../styles/Home.css";

import isbjørn from "../assets/øl/isbjørn1.png";

const Home = () => {
  return (
    <div className="øl-top-container">
      <img src={isbjørn} alt="isbjørn" />
    </div>
  );
};

export default Home;
