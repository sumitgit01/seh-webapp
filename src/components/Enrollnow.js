import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/EnrollNow.css";
import user_icon from "../assets/images/EnrollNow/person.png";
import email_icon from "../assets/images/EnrollNow/email.png";
import password_icon from "../assets/images/EnrollNow/password.png";
import mobile_icon from "../assets/images/EnrollNow/mobile.png";
import axios from "../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MOBILE_REGEX =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/gim;
const REGISTER_URL = "/register";

const Enrollnow = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [student_name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [student_email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [student_password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [student_mobile, setMobile] = useState("");
  const [validMobile, setValidMobile] = useState(false);
  const [mobileFocus, setMobileFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(student_name));
  }, [student_name]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(student_email));
  }, [student_email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(student_password));
    setValidMatch(student_password === matchPwd);
  }, [student_password, matchPwd]);

  useEffect(() => {
    setValidMobile(MOBILE_REGEX.test(student_mobile));
  }, [student_mobile]);

  useEffect(() => {
    setErrMsg("");
  }, [student_name, student_password, matchPwd]);

  // Handling the student_name change
  const handleName = (e) => {
    setName(e.target.value);
  };
  // Handling the student_email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleMatchPassword = (e) => {
    setMatchPwd(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(student_name);
    const v2 = PWD_REGEX.test(student_password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          student_name,
          student_password,
          student_mobile,
          student_email,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setName("");
      setPassword("");
      setMatchPwd("");
      setEmail("");
      setMobile("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {success ? (
        <section>
          <h4>User {userRef} successfully registered!!</h4>
          <p>
            <a href="www.google.com">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <div className="header">
            <div className="text">Enroll me</div>
            <h4>
              Contact me below to find out more about how you can benefit me
              from coaching.
            </h4>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form
              name="enrollStudent"
              id="enrollmentForm"
              onSubmit={handleSubmit}
            >
              {/* Labels and inputs for form data */}
              <div className="container">
                <div className="underline">
                  <div className="inputs">
                    <div className="input">
                      <img src={user_icon} alt="" />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validName ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validName || !student_name ? "hide" : "invalid"
                        }
                      />
                      <input
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={handleName}
                        value={student_name}
                        type="text"
                        placeholder="Name"
                        name="student_name"
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                      <p
                        id="uidnote"
                        className={
                          userFocus && student_name && !validName
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.
                        <br />
                        Must begin with a letter.
                        <br />
                        Letters, numbers, underscores, hyphens allowed.
                      </p>
                    </div>
                    <div className="input">
                      <img src={email_icon} alt="" />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validEmail ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validEmail || !student_email ? "hide" : "invalid"
                        }
                      />
                      <input
                        onChange={handleEmail}
                        value={student_email}
                        type="email"
                        placeholder="Email"
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                      <p
                        id="uidnote"
                        className={
                          emailFocus && student_email && !validEmail
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Please enter a valid email address.
                      </p>
                    </div>

                    <div className="input">
                      <img src={password_icon} alt="" />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validPwd || !student_password ? "hide" : "invalid"
                        }
                      />
                      <input
                        onChange={handlePassword}
                        value={student_password}
                        type="password"
                        id="student_password"
                        placeholder="Password"
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                      />
                      <p
                        id="pwdnote"
                        className={
                          pwdFocus && !validPwd ? "instructions" : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.
                        <br />
                        Must include uppercase and lowercase letters, a number
                        and a special character.
                        <br />
                        Allowed special characters:{" "}
                        <span aria-label="exclamation mark">!</span>{" "}
                        <span aria-label="at symbol">@</span>{" "}
                        <span aria-label="hashtag">#</span>{" "}
                        <span aria-label="dollar sign">$</span>{" "}
                        <span aria-label="percent">%</span>
                      </p>
                    </div>
                    <div className="input">
                      <img src={password_icon} alt="" />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      />
                      <input
                        onChange={handleMatchPassword}
                        id="confirm_pwd"
                        type="password"
                        placeholder="Confirm Password"
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                      />
                      <p
                        id="confirmnote"
                        className={
                          matchFocus && !validMatch
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                      </p>
                    </div>
                    <div className="input">
                      <img src={mobile_icon} alt="" />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validMobile ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validMobile || !student_mobile ? "hide" : "invalid"
                        }
                      />
                      <input
                        onChange={handleMobile}
                        value={student_mobile}
                        type="text"
                        placeholder="Mobile"
                        required
                        aria-invalid={validMobile ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setMobileFocus(true)}
                        onBlur={() => setMobileFocus(false)}
                      />
                      <p
                        id="uidnote"
                        className={
                          mobileFocus && student_mobile && !validMobile
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Please enter valid Mobile number with country code.
                      </p>
                    </div>
                    {/* <div className="forgot-password">
                Lost Password? <span>Click here</span>
              </div> */}
                    <div className="submit-container">
                      {/* <div className="submit" onClick={handleSubmit}> */}
                      <div className="submit" onClick={handleSubmit}>
                        Submit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <p>
              Already registered?
              <br />
              <span className="line">
                {/*put router link here*/}
                <a href="www.google.com">Sign In</a>
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Enrollnow;
