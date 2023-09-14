import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Footer.css";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="container">
        <ul className="d-flex flex-row justify-content-center align-items-center list-unstyled">
          <a
            href="https://www.youtube.com/@devopslab-livescenarios1302/videos"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.github.com/minaxijoshi3101/"
            className="github social"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.twitter.com/" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/minaxijoshi3101/"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </ul>
      </div>
      <div className="container">
        <h5>{`Query Us: queries@seh.com`}</h5>
      </div>
      <div className="container">
        <p> {`Copyright © SuccessEduHub Code ${year}`}</p>
      </div>
    </div>
  );
};

export default Footer;
