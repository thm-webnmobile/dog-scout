import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../App.css";
import "whatwg-fetch";

class Landing extends Component {
  render() {
    return (
      <Router>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col-centered col-xs-3">
              <br />
              <h3>
                Willkommen bei <b>Dog Scout!</b>
              </h3>
              <p>Haben Sie schon ein Konto?</p>
              <br />
              <Button
                variant="dark"
                className="col s6 btn-block"
                href="/register"
              >
                Neuen Account erstellen
              </Button>
              <Button variant="dark" className="col s6 btn-block" href="/login">
                Anmelden
              </Button>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default Landing;
