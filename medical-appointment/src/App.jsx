import "./App.css";
import Mynav from "../src/component/common/Navbar";
import Home from "./component/home/Home";
import { Route, Routes } from "react-router-dom";
import Doctorpage from "./component/page/Doctorsfilter/Doctorpage";
import Profile from "./component/page/Doctorprofile/Profile";
import {
  FavoritesProvider,
  usefavorites,
} from "./context/favoritecontext/Contextfavo";
import Favoriteitem from "./feature/doctorfavorite/Favoriteitem";
import { Authprovider } from "./context/AuthContext/Authenticationcxt";
import Loginpage from "./component/page/loginpage/Loginpage";
import Protectroutes from "./component/common/Protectroutes";
import Footer from "./component/common/footer/Footer";
import About from "./component/page/about/About";

// 1️⃣ عملنا مكون داخلي جديد عشان نقدر نستخدم جواهُ الـ Hook بسلام
function AppRoutes() {
  const { favo } = usefavorites();

  return (
    <>
      <Mynav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctorpage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/about" element={<About/>} />
        <Route
          path="/favo"
          element={
            <Protectroutes>
              <Favoriteitem favo={favo} />
            </Protectroutes>
          }
        />
        <Route path="/Login" element={<Loginpage />} />
      </Routes>
      <Footer/>
    </>
  );
}

// 2️⃣ الـ App الأساسي بيغلف كل حاجة بالـ Provider
function App() {
  return (
    <Authprovider>
      <FavoritesProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </FavoritesProvider>
    </Authprovider>
  );
}

export default App;
