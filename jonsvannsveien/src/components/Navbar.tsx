import React, { useState, useRef, useEffect } from "react";

import "../styles/Navbar.css";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isBarsClicked, setIsBarsClicked] = useState(false);
  const [isBarLinesRotated, setIsBarLinesRotated] = useState(false);
  const navigate = useNavigate();

  const dropDownContainerRef = useRef<HTMLDivElement>(null);
  const dropDownListRef = useRef<HTMLDivElement>(null);

  const toogleDropDown = () => {
    setIsBarsClicked(!isBarsClicked);
    setIsBarLinesRotated(!isBarLinesRotated);
    document.body.style.overflow = isBarsClicked ? "auto" : "hidden";
  };

  const navigateTo = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedElement = event.currentTarget.id;

    if (clickedElement) {
      if (clickedElement === "Hjem") {
        navigate("/");
      } else if (clickedElement === "Personer") {
        navigate("/personer");
      } else if (clickedElement === "Øl") {
        navigate("/ol");
      } else if (clickedElement === "Gjestebok") {
        navigate("/gjestebok");
      } else if (clickedElement === "vip") {
        navigate("/vip");
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {};
  }, []);

  return (
    <div>
      <div id="navbar-top">
        <div id="menu-btn" onClick={toogleDropDown}>
          <div id="menu-btn-icon">
            <div
              className={`bar-line ${isBarLinesRotated ? "rotate" : ""}`}
              id="bar-line-1"></div>
            <div
              className={`bar-line ${isBarLinesRotated ? "rotate" : ""}`}
              id="bar-line-2"></div>
            <div
              className={`bar-line ${isBarLinesRotated ? "rotate" : ""}`}
              id="bar-line-3"></div>
          </div>
          <p id="menu-btn-text">Meny</p>
        </div>
      </div>
      <div className={`blur ${isBarLinesRotated ? "toggled" : ""}`}></div>
      <div
        className={`blur-background ${
          isBarLinesRotated ? "toggled" : ""
        }`}></div>
      <div
        id={
          isBarsClicked ? "drop-down-container-toggled" : "drop-down-container"
        }
        ref={dropDownContainerRef}>
        <div id="drop-down-list" ref={dropDownListRef}>
          <div className="drop-down-item" onClick={navigateTo} id="Hjem">
            Hjem
          </div>
          <div className="drop-down-item" onClick={navigateTo} id="Personer">
            Folka
          </div>
          <div className="drop-down-item" onClick={navigateTo} id="Øl">
            Øl
          </div>
          <div className="drop-down-item" onClick={navigateTo} id="Gjestebok">
            Gjestebok
          </div>
          <div className="drop-down-item" onClick={navigateTo} id="vip">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2FOther%2Fstore_hc_2x.png?alt=media&token=5dd1bb78-8e8d-4b1d-bc4f-d32f435c8c2e"
              alt="hc"
              id="hc-img"
            />
          </div>
        </div>
        {/* <div>
          <a
            href="https://www.instagram.com/bodega69b/"
            target="_blank"
            id="instagram-icon-container">
            <img
              id="insta-img"
              src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2FMembers%2Fola.jpeg?alt=media&token=8fb5ff3f-11b2-442f-853e-55cbb81aed5a"
            />
            <p id="insta-text">@bodega69b</p>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
