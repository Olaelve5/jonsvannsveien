import React, { useState } from "react";

import Navbar from "../components/Navbar";
import HabboGifs from "../components/HabboGifs";
import "../styles/VIP.css";

const VIP = () => {
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState(false);
  const [wrongPasswordCount, setWrongPassordCount] = useState(0);
  const expectedPassword = "martine69";
  const [auth, setAuth] = useState(false);
  const [howardIsPlaying, setHowardIsPlaying] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password === expectedPassword) {
      setAuth(true);
      setHowardIsPlaying(true);
      setFeedback(false);
    } else {
      setFeedback(true);
      setWrongPassordCount(wrongPasswordCount + 1);
    }
  };

  return (
    <div id="vip-page">
      <Navbar />
      <HabboGifs />
      <div id="VIP-top-container">
        <div className="hc-img-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2FOther%2Fstore_hc_2x.png?alt=media&token=5dd1bb78-8e8d-4b1d-bc4f-d32f435c8c2e"
            alt="hc"
            id="hc-img-vip"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2FOther%2Fsky-wiiii.png?alt=media&token=110b06c8-ea03-431c-938f-49f941a084f6"
            alt="sky"
            id="sky-img"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2FOther%2Fsky-good.png?alt=media&token=baa9716e-eefd-4cb4-aa2c-efd66627d9d0"
            alt="sky"
            id="sky-img2"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2FOther%2Fsky-good.png?alt=media&token=baa9716e-eefd-4cb4-aa2c-efd66627d9d0"
            alt="sky"
            id="sky-img3"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2FOther%2Fsky-wiiii.png?alt=media&token=110b06c8-ea03-431c-938f-49f941a084f6"
            alt="sky"
            id="sky-img4"
          />
        </div>
        {auth ? (
          <div>
            <audio
              style={{ display: "none" }}
              src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Music%2Fhoward-ear-rape.mp3?alt=media&token=49f882cc-bd15-4410-b5b0-50c395a2f19f&_gl=1*18oj44t*_ga*NzkwMzQ3MTIzLjE2OTQ0NTA1MTE.*_ga_CW55HF8NVT*MTY5NjAxMDc4Ny45LjEuMTY5NjAxMTM4NC42MC4wLjA."
              controls={true}
              autoPlay={howardIsPlaying}
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/jonsvannsveien-eb705.appspot.com/o/Images%2Fgifs%2FIMG_1795.GIF?alt=media&token=b9c97107-108d-451a-afa4-a6f8d9396f56"
              alt="howard"
            />
          </div>
        ) : (
          <div>
            <div id="VIP-password-field">
              {/* <p id="passord-text">Passord</p> */}
              <input
                type="password"
                id="password-input"
                value={password}
                onChange={handlePasswordChange}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />

              <div onClick={handleSubmit} id="submit-btn">
                <div className="submit-line" id="submit-line-1"></div>
                <div className="submit-line" id="submit-line-2"></div>
                <div className="submit-line" id="submit-line-3"></div>
              </div>
            </div>
            {feedback ? (
              <p>
                Nejjjjjjj. Prøv igjen{" "}
                {wrongPasswordCount > 1 ? "x" + wrongPasswordCount : ""}
              </p>
            ) : (
              <> </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VIP;
