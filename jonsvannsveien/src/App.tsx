import { useState } from "react";

import Home from "./pages/Home";
import Patricle from "./components/Particle";

import Spline from "@splinetool/react-spline";

function App() {
  return (
    <>
      <Spline scene="https://prod.spline.design/Ni3jDaKGWW5RrffF/scene.splinecode" />

      <Home />
      <Patricle />
    </>
  );
}

export default App;
