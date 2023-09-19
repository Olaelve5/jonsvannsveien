import React, { useState, useRef } from "react";

import "../styles/Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSun,
  faCloudMoon,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const [isMoonClicked, setIsMoonClicked] = useState(false);
  const [isBarsClicked, setIsBarsClicked] = useState(false);

  const dropDownContainerRef = useRef<HTMLDivElement>(null);
  const dropDownListRef = useRef<HTMLDivElement>(null);

  const changeColor = () => {
    if (isMoonClicked) {
      dropDownContainerRef.current!.style.backgroundColor = "rgb(28, 59, 100)";
      dropDownListRef.current!.style.color = "white";
    } else {
      dropDownContainerRef.current!.style.backgroundColor =
        "rgb(211, 235, 255)";
      dropDownListRef.current!.style.color = "black";
    }
  };

  const toggleMoon = () => {
    setIsMoonClicked(!isMoonClicked);
    changeColor();
  };

  const toogleDropDown = () => {
    setIsBarsClicked(!isBarsClicked);
  };

  return (
    <div>
      <div id="navbar-top">
        <div id="moon-container" onClick={toggleMoon}>
          {!isMoonClicked ? (
            <FontAwesomeIcon icon={faCloudMoon} id="navbar-icon" />
          ) : (
            <FontAwesomeIcon
              icon={faCloudSun}
              flip="horizontal"
              id="navbar-icon"
            />
          )}
        </div>
        <div id="menu-icon-container" onClick={toogleDropDown}>
          {!isBarsClicked ? (
            <FontAwesomeIcon icon={faBars} id="navbar-icon" />
          ) : (
            <FontAwesomeIcon icon={faCircleXmark} id="navbar-icon" />
          )}
        </div>
      </div>
      <div
        id={
          isBarsClicked ? "drop-down-container-toggled" : "drop-down-container"
        }
        ref={dropDownContainerRef}>
        <div id="drop-down-list" ref={dropDownListRef}>
          <div className="drop-down-item">Hjem</div>
          <div className="drop-down-item">Personer</div>
          <div className="drop-down-item">Øl</div>
          <div className="drop-down-item">Gjestebok</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
