import "../styles/Post.css";

export interface PostInterface {
  title: string;
  description: string;
  author: string;
  date: string;
}

export default function Post(props: PostInterface) {
  return (
    <div className="postContainer">
      <h1 className="title">{props.title}</h1>
      <p className="description">{props.description}</p>
      <p className="author">Hilsen {props.author}</p>
      <p className="date">{props.date}</p>
    </div>
  );
}
