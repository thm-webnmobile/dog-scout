import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "../App.css";
import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";
import Profilseite from "./profilseite";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="Suche">
            <br />
            <h3 className="centered">Ich suche...</h3>
            <br />
            <div className="centered">
              <Form>
                <Form.Check
                  type="radio"
                  name="Suche"
                  id="Hundebesitzer"
                  label="... Hundebesitzer"
                />
                <Form.Check
                  type="radio"
                  name="Suche"
                  id="Gassigeher"
                  label="... Gassigeher"
                />
                <br />
                <Button
                  className="SteckbriefeSuchen"
                  variant="outline-dark"
                  type="submit"
                  href="/map"
                >
                  Steckbriefe suchen
                </Button>
              </Form>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Router>
    );
  }
}

export default Content;
