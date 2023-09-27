// src/components/HomePage.tsx
import React from "react";
import "../styles/Member.css";

interface Props {
  name: string;
  hometown: string;
  age: number;
  pictureUrl: string;
}

export default function Member(props: Props) {
  return (
    <div className="container">
      <h1 className="profileHeader">
        {props.name} ({props.age})
      </h1>
      <img className="profilePicture" src={props.pictureUrl} alt="profile" />
      <p className="description">{props.hometown}</p>
    </div>
  );
}
