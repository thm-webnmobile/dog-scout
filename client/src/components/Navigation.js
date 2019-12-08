import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./Hunde-Icon.png";
import profilbild from "./profilbild-beispiel.jpg";
import Profilseite from "./profilseite.js";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  ReactBootstrapStyle,
  Button
} from "react-bootstrap";
import Content from "./content";
import Landing from "./landing";
import LoggedIn from "./LoggedIn";
import Home from "./home";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar
            className="navigation navbar-fixed d-flex justify-content-between"
            style={{ backgroundColor: "#b7a274" }}
          >
            <Navbar.Brand className="text-black" href="/home">
              <img
                alt="Dog Scout Logo"
                src={logo}
                width="40"
                height="40"
                className="d-block align-top"
              />
              Dog Scout
            </Navbar.Brand>

            <Navbar.Brand href="/profilseite" className="nav-link text-black">
              Mein Profil
              <div className="image-cropper">
                <img
                  style={{ margin: "0 auto", height: "auto", width: "100%" }}
                  alt="Profilbild"
                  src={profilbild}
                  width="30"
                  height="40"
                  className="d-block"
                />
              </div>
            </Navbar.Brand>

            <Nav.Item>
              <Nav.Link href="/">Abmelden</Nav.Link>
            </Nav.Item>
          </Navbar>
        </div>
      </Router>
    );
  }
}

export default Navigation;
