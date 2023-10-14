import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../App";

const Øl = () => {
  const [beers, setBeers] = useState<{ id: string }[]>([]);
  const beerCollectionRef = collection(firestore, "beer");

  const getBeer = async () => {
    const data = await getDocs(beerCollectionRef);

    setBeers(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
    console.log(beers);
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Øl</h1>
    </div>
  );
};

export default Øl;
