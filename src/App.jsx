import { Route, Routes } from "react-router-dom";

import Home from "./Component/Home/Home";
// import Layout from "./Component/Layout/Layout";
import Swap from "./Component/Swap/Swap";
import Layout from "./Component/Layout/Layout";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout><Home/></Layout>} />
          <Route
            path="/swap"
            element={
              <Layout>
                <Swap />
              </Layout>
            }
          />
        </Routes>
    </>
  );
}

export default App;
