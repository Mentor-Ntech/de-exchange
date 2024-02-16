import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Swap from "./Component/Swap/Swap";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </>
  );
}

export default App;
