import React from "react";

import "../styles/Home.css";

import isbjørn from "../assets/øl/isbjørn.png";

const Home = () => {
  return (
    <div className="isbjørn-container">
      <img src={isbjørn} alt="isbjørn" />
    </div>
  );
};

export default Home;
