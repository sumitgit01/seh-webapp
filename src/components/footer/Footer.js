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
    // <footer>
    //   <SocialIcon url="www.pinterest.com" className="youtube social">
    //     <FontAwesomeIcon icon={faYoutube} size="2x" />
    //   </SocialIcon>
    //   <SocialIcon url="www.youtube.com" />
    //   <SocialIcon url="www.instagram.com" />
    //   <SocialIcon url="www.linkedin.com" />
    //   <SocialIcon url="www.twitter.com" />
    //   <SocialIcon url="www.github.com" />
    //   {`Copyright © SuccessEduHub Code ${year}`}
    // </footer>
    <div>
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
      <p> {`Copyright © SuccessEduHub Code ${year}`}</p>
    </div>
  );
};

export default Footer;
