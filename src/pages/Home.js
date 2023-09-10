import React from "react";
import "../styles/AboutUs.css";
import "../styles/Home.css";
import ButtonComp from "../components/ButtonComp";

const Home = () => {
  return (
    <div class="row">
      <div class="column">
        <img
          alt="sehimg"
          width="80%"
          height="80%"
          src={require("../assets/images/seh.jpg")}
          className="image"
          style={{ marginLeft: "20px" }}
        />
      </div>
      <div style={{ marginTop: "40px" }} class="column">
        <div>
          <h1>SuccessEduHub classes</h1>
          <p>Classes to make your career bright.</p>
          <ButtonComp type="submit" label="Enroll Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
