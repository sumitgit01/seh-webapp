import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import AboutUs from "./components/AboutUs";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enrollnow from "./components/Enrollnow";

function App() {
  return (
    <div>
      <Router>
        <Navbar title="SuccessEduHub" aboutText="About Us" />
        {/* <Navbar /> */}
        <Search />
        <Routes>
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/enroll" element={<Enrollnow />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
