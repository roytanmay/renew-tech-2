import { Route, Routes } from "react-router-dom";
import Community from "./pages/Community";
import Support from "./pages/Support";
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import "./App.css";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App dark:bg-[#012801]">
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/community" element={<Community></Community>} />
          <Route path="/support" element={<Support></Support>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/login" element={<LogIn></LogIn>} />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/blogs" element={<Blog></Blog>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
