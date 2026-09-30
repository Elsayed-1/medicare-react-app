import "./App.css";
import Mynav from "../src/component/common/Navbar";
 
import Home from "./component/home/Home";
 
import { Route, Routes } from "react-router-dom";
import Doctorpage from "./component/page/Doctorsfilter/Doctorpage";
import Profile from "./component/page/Doctorprofile/Profile";
 
function App() {
  return (
    <>
      <div>
        <Mynav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctorpage />} />
          <Route path="/profile/:id" element={<Profile/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
