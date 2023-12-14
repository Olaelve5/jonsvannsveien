// src/components/HomePage.tsx
import { ref, get, child } from "firebase/database";
import { useEffect, useState } from "react";
//import { database } from "../config/firebase.js";
import Member from "../components/Member.js";
import Navbar from "../components/Navbar.js";
import "../styles/Members.css";
import { database } from "../App.js";

interface Member {
  name: string;
  hometown: string;
  age: number;
  pictureUrl: string;
  nickname: string;
  shoesize: number;
}

const Members = () => {
  const [members, setMembers] = useState<Member[]>([]);

  const dbRef = ref(database);
  document.body.style.overflow = "auto";

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
    <div>
      <Navbar />
      <h1 className="members-header">Folka</h1>
      <div className="wrapper-folka">
        <div className="members-li">
          {members.map((member) => (
            <Member
              key={member.pictureUrl}
              name={member.name}
              hometown={member.hometown}
              age={member.age}
              pictureUrl={member.pictureUrl}
              nickname={member.nickname}
              shoesize={member.shoesize}
            />
            // <p key={index}>{member.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
