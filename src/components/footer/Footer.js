import React from "react";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Footer.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();
  const Component = <SocialIcon url="https://twitter.com" />;
  const title = "Lorem Ipsum";
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
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
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
