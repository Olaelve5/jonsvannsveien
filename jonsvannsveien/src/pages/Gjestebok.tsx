import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/gjestebok.css";
import { firestore } from "../App";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { PostInterface } from "../components/Post";
import Post from "../components/Post";

const Gjestebok = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const handleSubmit = async () => {
    if (
      author.trim().length < 1 ||
      description.trim().length < 1 ||
      title.trim().length < 1
    )
      return alert("Du må fylle ut alle feltene");
    const date = new Date().toLocaleDateString("no-NO");
    const time = new Date().toLocaleTimeString("no-NO", { hour12: false });
    const formattedDate = date + " " + time;

    await setDoc(doc(firestore, "posts", formattedDate), {
      title: title,
      author: author,
      description: description,
      date: formattedDate,
    });
    setAuthor("");
    setDescription("");
    setTitle("");

    getPosts();
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
      <h1>❤️ Gjestebok ❤️</h1>
      <div className="containerr">
        <div className="inputFields">
          <div className="authorAndTitle">
            <input
              className="inputTitle"
              value={title}
              placeholder="Tittel"
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              className="inputAuthor"
              value={author}
              placeholder="Hvem er du?"
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
          <textarea
            className="inputDescription"
            style={{ height: "100px" }}
            placeholder="Skriv en hilsen her <3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button className="submitButton" onClick={handleSubmit}>
            Legg inn hilsen
          </button>
        </div>
        <div>
          {posts
            .slice()
            .reverse()
            .map((post: PostInterface) => (
              <Post
                key={post.date}
                title={post.title}
                author={post.author}
                date={post.date}
                description={post.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gjestebok;
