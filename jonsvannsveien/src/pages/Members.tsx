// src/components/HomePage.tsx
import { ref, get, child } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../utils/firebase.js";
import Member from "../components/Member.js";
import "../styles/Members.css";

interface Member {
  name: string;
  hometown: string;
  age: number;
  pictureUrl: string;
}

const Members = () => {
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
    <div className="wrapper">
      <h1 className="header" >Folkene i Jonsvannsveien 69B</h1>
      <div>
        {members.map((member) => (
          <Member
            name={member.name}
            hometown={member.hometown}
            age={member.age}
            pictureUrl={member.pictureUrl}
          />
          // <p key={index}>{member.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Members;
