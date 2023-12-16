import Home from "./pages/Home";
import Members from "./pages/Members";
import Gjestebok from "./pages/Gjestebok";
import Øl from "./pages/Øl";
import VIP from "./pages/VIP";
import BeerInfo from "./pages/BeerInfo.js";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/config.js";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const firestore = getFirestore(app);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personer" element={<Members />} />
        <Route path="/beer" element={<Øl />} />
        <Route path="/beer/:id" element={<BeerInfo />} />
        <Route path="/gjestebok" element={<Gjestebok />} />
        <Route path="/vip" element={<VIP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
