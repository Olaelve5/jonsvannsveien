import { useEffect, useRef, useState } from "react";
import "../styles/Member.css";
import * as React from "react";
import Modal from "@mui/material/Modal";

interface Props {
  name: string;
  hometown: string;
  age: number;
  pictureUrl: string;
  nickname: string;
  shoesize: number;
}

export default function Member(props: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div onClick={() => setOpen(!open)} className="container">
        <img
          className="profilePictureSmall"
          src={props.pictureUrl}
          alt="profile"
        />
        <h1 className="profileHeaderSmall">{props.nickname}</h1>
      </div>
      <Modal open={open} onClose={() => setOpen(!open)}>
        <div className="modalContainer">
          <h1>{props.name}</h1>
          <img className="profilePictureLarge" src={props.pictureUrl} />
          <p>
            Hjemby: {props.hometown}
            <br />
            Skostørrelse: {props.shoesize}
          </p>
        </div>
      </Modal>
    </>
  );
}
