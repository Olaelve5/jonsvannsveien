// src/components/HomePage.tsx
import { useState } from "react";
import "../styles/Member.css";
import Modal from "react-overlays/Modal";
import styled from "styled-components";

interface Props {
  name: string;
  hometown: string;
  age: number;
  pictureUrl: string;
}

export default function Member(props: Props) {
  const [expand, setExpand] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const Backdrop = styled("div")`
    position: fixed;
    z-index: 1040;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
  `;

  const renderBackdrop = (props: any) => <Backdrop {...props} />;

  return (
    <div className="container" onClick={() => setExpand(!expand)}>
      <img className="profilePictureSmall" src={props.pictureUrl} alt="profile" />
      <h1 className="profileHeaderSmall">{props.name.split(" ")[0]}</h1>
      <Modal

        show={expand}
        renderBackdrop={renderBackdrop}
        onBackdropClick={() => setExpand(!expand)}>
        <div
          style={{
            zIndex: 10000,
            position: "absolute",
            top: 30,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 20,
            width: "80%",
            height: "90%",
            margin: "auto",
            marginBottom: 30,
            backgroundColor: "white",
          }}>
          <h1 style={{color: 'black'}}>
            {props.name} ({props.age})
          </h1>
          <img className="profilePictureLarge" src={props.pictureUrl} alt="profile" />
          <p style={{ color: "black" }}>{props.hometown}</p>
          {props.name==='Mats Klevstad' ? <p style={{color:'black'}}>3cm</p>: <></>}
          {props.name==='Ola Johannes Elvedahl' ? <p style={{color:'black', fontSize:70}}>KE?</p>: <></>}

        </div>
      </Modal>
    </div>
  );
}
