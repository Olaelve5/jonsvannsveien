import Home from "./pages/Home";
import Members from "./pages/Members";
import Gjestebok from "./pages/Gjestebok";
import Øl from "./pages/Øl";
import VIP from "./pages/VIP";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personer" element={<Members />} />
        <Route path="/ol" element={<Øl />} />
        <Route path="/gjestebok" element={<Gjestebok />} />
        <Route path="/vip" element={<VIP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
