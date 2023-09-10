import React from "react";
import { useState } from "react";
import "../styles/EnrollNow.css";
import user_icon from "../assets/images/EnrollNow/person.png";
import email_icon from "../assets/images/EnrollNow/email.png";
import password_icon from "../assets/images/EnrollNow/password.png";
import mobile_icon from "../assets/images/EnrollNow/mobile.png";

const Enrollnow = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h4>User {name} successfully registered!!</h4>
      </div>
    );
  };
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h4>Please enter all the fields</h4>
      </div>
    );
  };
  return (
    <div className="header">
      <div className="text">Enroll me</div>
      <h4>
        Contact me below to find out more about how you can benefit me from
        coaching.
      </h4>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <div className="container">
          <div className="underline">
            <div className="inputs">
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  onChange={handleName}
                  value={name}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="input">
                <img src={mobile_icon} alt="" />
                <input
                  onChange={handleMobile}
                  value={mobile}
                  type="text"
                  placeholder="Mobile"
                />
              </div>
              {/* <div className="forgot-password">
                Lost Password? <span>Click here</span>
              </div> */}
              <div className="submit-container">
                <div className="submit" onClick={handleSubmit}>
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Enrollnow;
