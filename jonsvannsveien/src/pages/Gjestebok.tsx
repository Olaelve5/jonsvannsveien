import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/gjestebok.css";
import { firestore } from "../App";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

interface Post {
  id: string;
  name: string;
  description: string;
  date: string;
}

const Gjestebok = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    if (name.trim().length < 1 || description.trim().length < 1)
      return alert("Du må fylle ut begge feltene");
    const date = new Date().toLocaleDateString("no-NO");
    const time = new Date().toLocaleTimeString("no-NO", { hour12: false });
    const formattedDate = date + " " + time;

    await setDoc(doc(firestore, "posts", formattedDate), {
      name: name,
      description: description,
      date: formattedDate,
    });
    getPosts();
    setName("");
    setDescription("");
  };

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(firestore, "posts"));
    const postArray: any[] = [];

    querySnapshot.forEach((doc) => {
      postArray.push(doc.data());
    });
    setPosts(postArray);
  };

  return (
    <div>
      <Navbar />
      <h1>Gjestebok</h1>
      <div className="containerr">
        <div className="inputFields">
          Hvem er du:{" "}
          <input value={name} onChange={handleNameChange} type="text" />
          <br />
          Legg igjen en hilsen:{""}
          <textarea
            style={{ height: "100px" }}
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button onClick={handleSubmit}>Send</button>
        <div>
          {posts
            .slice()
            .reverse()
            .map((post: Post) => (
              <div key={post.id} className="postContainer">
                <h1>{post.name}</h1>
                <p>{post.description}</p>
                <p>
                  {post.date}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gjestebok;
