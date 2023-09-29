import React, { useEffect, useState } from "react";
import "../styles/Home.css";

import Navbar from "../components/Navbar";

import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="waves">
        <img src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2Fwaves%2Flayered-waves-haikei%20(9).svg?alt=media&token=4c3f0cd5-57cb-48b6-9567-85e0d7f6407c" />
      </div>
      <div id="waves2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2Fwaves%2Flayered-waves-haikei%20(11).svg?alt=media&token=246218a2-ff1e-4d9e-88e1-a5cb6c71c231"
          alt="waves2"
        />
      </div>
      <div id="waves3"></div>
      <h1 id="title">Jonsvannsveien</h1>
      <div className="home-content">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2FOther%2FGroup%201.svg?alt=media&token=6c9d983c-7327-4390-a1a4-dc24b99f6a68"
          alt="hus"
          className="hus"
        />
      </div>
    </div>
  );
};

export default Home;
