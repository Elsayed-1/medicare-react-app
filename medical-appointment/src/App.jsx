import "./App.css";
import Mynav from "../src/component/common/Navbar";
 
import Home from "./component/home/Home";
 
import { Route, Routes } from "react-router-dom";
import Doctorpage from "./component/page/Doctorpage";
function App() {
  return (
    <>
      <div>
        <Mynav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctorpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
