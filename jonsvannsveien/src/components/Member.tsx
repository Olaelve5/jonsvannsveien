// src/components/HomePage.tsx
import { useEffect, useRef, useState } from "react";
import "../styles/Member.css";
import Modal from "react-bootstrap/Modal";

interface Props {
  name: string;
  hometown: string;
  age: number;
  pictureUrl: string;
  nickname: string;
  shoesize: number;
}

export default function Member(props: Props) {
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath();
      if (modalRef.current && !path.includes(modalRef.current)) {
        setShow(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div onClick={() => setShow(!show)} className="container">
        <img
          className="profilePictureSmall"
          src={props.pictureUrl}
          alt="profile"
        />
        <h1 className="profileHeaderSmall">{props.nickname}</h1>
      </div>

      <Modal
        ref={modalRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          backgroundColor: "white",
          width: "80%",
          height: "65%",
          borderRadius: "10px",
          padding: "10px",
          zIndex: 1000,
        }}
        show={show}
        onHide={() => setShow(!show)}>
        <div>
          <h1 className="profileHeaderLarge">
            {props.name}({props.age})
          </h1>
          <img
            className="profilePictureLarge"
            src={props.pictureUrl}
            alt="profile"
          />
          <p style={{ color: "black" }}>
            Hjemsted: {props.hometown} <br />
            Skostørrelse: {props.shoesize}
          </p>
        </div>
      </Modal>
    </>
  );
}
