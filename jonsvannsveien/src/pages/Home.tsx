import React, { useEffect, useState } from "react";
import "../styles/Home.css";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Jonsvannsveien</h1>
      <div className="home-content">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2FOther%2Fhus-garage.png?alt=media&token=8fbf91aa-8f3f-4d14-a5ba-3105c9715405"
          alt="hus"
          className="hus"
        />
        <h1>Hi</h1>
      </div>
    </div>
  );
};

export default Home;
