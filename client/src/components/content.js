import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "../App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class Content extends Component {
  render() {
    const { user } = this.props.auth; //!!!
    return (
      <Router>
        <div>
          <div className="Suche">
            <br />

            <Jumbotron className="Hintergrund">
              <h1 className="space">
                Willkommen, <b>{user.name.split(" ")[0]}!</b>
              </h1>
            </Jumbotron>

            <br />
            <Container className="centered">
              <Form className="border border-secondary Formular rounded-sm">
                <h2 className="centered">Ich suche...</h2>
                <br />
                <Link
                  to={{
                    pathname: "/map",
                    state: "hundebesitzer"
                  }}
                >
                  ... Hundebesitzer
                </Link>

                <br />
                <Link
                  to={{
                    pathname: "/map",
                    state: "gassigeher"
                  }}
                >
                  ... Gassigeher
                </Link>
                <br />
              </Form>
            </Container>
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

Content.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(Content);
