import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import "C:/Users/roari/Desktop/reacttest2/dog-scout/client/src/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./Hunde-Icon.png";
import profilbild from "./profilbild-beispiel.jpg";
import Profilseite from "./profilseite.js";

import { Navbar, Nav, Form, FormControl, ReactBootstrapStyle, Button } from 'react-bootstrap';
import Content from './content';
import Landing from './landing';
import LoggedIn from './LoggedIn';



class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar className="navbar-fixed d-flex justify-content-between" style={{ backgroundColor: '#bc986a' }}>
            <Navbar.Brand className="text-black" href="/">
              <img
                alt="Dog Scout Logo"
                src={logo}
                width="40"
                height="40"
                className="d-block align-top"
              />
              Dog Scout
            </Navbar.Brand>


            <Navbar.Brand href="/profilseite" className="nav-link" >
              Mein Profil
              <div class="image-cropper">
                <img style={{ margin: "0 auto", height: "auto", width: "100%" }}
                  alt="Profilbild"
                  src={profilbild}
                  width="30"
                  height="40"
                  className="d-block"
                />
              </div>

            </Navbar.Brand>
          </Navbar>
          <Route path="/home" component={Content} />
          <Route path="/profilseite" component={Profilseite} />
          <Route path="/landing" component={Landing} />
          <Route path="/loggedin" component={LoggedIn} />
        </div>
      </Router>
        )
      }
    }
    
export default Navigation;