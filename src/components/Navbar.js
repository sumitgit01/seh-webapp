import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Person4Icon from "@mui/icons-material/Person4";
import { lightGreen } from "@mui/material/colors";

import "../styles/Navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="leftSide">
            <a className="navbar-brand" href="/#">
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="30"
                class="d-inline-block align-text-top"
              />
              {this.props.title}
            </a>
          </div>
          <div className="rightSide"></div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {this.props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/videos">
                  Videos
                </Link>
              </li>
              <li className="nav-item">
                <Person4Icon
                  style={{ backgroundColor: lightGreen[500] }}
                  sx={{ fontSize: "40px" }}
                  onClick={(event) => (window.location.href = "pagelink")}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="bg"></div>
      </nav>
    );
  }
}
