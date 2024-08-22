import "./App.css";
import Navbar from "./components/Navbar";

import AboutUs from "./components/AboutUs";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enrollnow from "./components/Enrollnow";
import Blogs from "./pages/Blogs";
import Story from "./pages/Story";

function App() {
  return (
    <div>
      <Router>
        <Navbar title="SuccessEduHub" aboutText="About Us" />
        {/* <Navbar /> */}

        <Routes>
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/enroll" element={<Enrollnow />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/my-story" element={<Story />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
