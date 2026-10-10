import "./App.css";
import Mynav from "../src/component/common/Navbar";
import Home from "./component/home/Home";
import { Route, Routes } from "react-router-dom";
import Doctorpage from "./component/page/Doctorsfilter/Doctorpage";
import Profile from "./component/page/Doctorprofile/Profile";
import { FavoritesProvider, usefavorites } from "./context/Contextfavo";
import Favoriteitem from "./feature/doctorfavorite/Favoriteitem";

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
        <Route path="/favo" element={<Favoriteitem favo={favo} />} />
      </Routes>
    </>
  );
}

// 2️⃣ الـ App الأساسي بيغلف كل حاجة بالـ Provider
function App() {
  return (
    <FavoritesProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </FavoritesProvider>
  );
}

export default App;