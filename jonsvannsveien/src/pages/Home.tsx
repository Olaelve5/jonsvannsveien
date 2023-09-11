import React, { useEffect, useState } from "react";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { database } from "../utils/firebase.js";
import "../styles/Home.css";

interface Member {
  name: string;
  age: number;
}

const Home = () => {
  const [members, setMembers] = useState<Member[]>([]);

  const dbRef = ref(database);

  useEffect(() => {
    getMembers();
  }, []);

  async function getMembers(): Promise<void> {
    get(child(dbRef, `members/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const memberData = snapshot.val();
          const memberArray: Member[] = Object.values(memberData);
          setMembers(memberArray);
          //setMembers(...members, snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="øl-top-container">
      <h1>Jonsvannsveien 69B</h1>
      <div>
        {members.map((member, index) => (
          <p key={index}>{member.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
