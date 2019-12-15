import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "C:/Users/roari/Desktop/reacttest2/dog-scout/client/src/App.css";
import Profilbild from './profilbild-beispiel.jpg';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './Navigation.js';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";


class Profilseite extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <Router>
        <Navigation />
        <div>
          <br />
          <Row>
            <Col className="col" sm={{ offset: 1 }} className="col">
              <h2>Mein Profil</h2>
              <img
                alt="Profilbild"
                src={Profilbild}
                width="120"
                height="auto"
                className="d-block"
              />
              <Button className="button-style" variant="outline-dark" >Profilbild ändern</Button>
            </Col>
            <Col className="col" sm={{ offset: 1 }}>
              <Form>
                <Form.Check type="checkbox" name="Profilbeschreibung" id="profil-Hundebesitzer" label="Hundebesitzer" />
                <Form.Check type="checkbox" name="Profilbeschreibung" id="profil-Gassigeher" label="Gassigeher" />
                <br />
                <br />
                Name: {user.name}
                <br />
                E-Mail: {user.email}
                <br />
                <br />
                Alter: 29
              <br />
                <br />
                <FormGroup>
                  <FormControl
                    style={{ height: '100px' }}
                    componentclass="textarea"
                    placeholder="Beschreibung"
                  />
                  <br />
                </FormGroup>

              </Form>
            </Col>
            <Col className="col" sm={{ offset: 1 }}>
              <h5>Bilder:</h5>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />


          <Route exact path="/navigation" component={Navigation} />
        </div>
      </Router>

    )
  }
}

Profilseite.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Profilseite);