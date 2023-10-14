import React, { useState } from "react";
import { database, firestore } from "../utils/firebase";
import Navbar from "../components/Navbar";
import "../styles/gjestebok.css";

const Gjestebok = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    const postsRef = database.firestore().collection("posts");

    await postsRef.add({
      name: "formValue",
      description: "hei",
    });
  };

  return (
    <div>
      <Navbar />
      <h1>Gjestebok</h1>
      <div className="containerr">
        <div className="name">
          Navn: <input value={name} onChange={handleNameChange} type="text" />
        </div>
        <div className="description">
          Beskrivelse:{" "}
          <input
            value={description}
            onChange={handleDescriptionChange}
            type="text"
          />
        </div>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Gjestebok;
