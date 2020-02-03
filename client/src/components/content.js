import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "../App.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


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

                <div className="d-flex flex-column">

                  <ButtonGroup toggle>
                      <ToggleButton variant="outline-dark" type="checkbox" state="Hundebesitzer" onChange={this.handleChange} defaultChecked value="1">
                        ... Hundebesitzer
                    </ToggleButton>

                    <ToggleButton variant="outline-dark" type="checkbox" state="Gassigeher" onChange={this.handleChange} defaultChecked value="1">
                      ... Gassigeher
                    </ToggleButton>
                  </ButtonGroup>
                </div>



                <br />
                <Button
                  className="button-style"
                  variant="outline-dark"
                  type="submit"
                  href="/map"
                >
                  Steckbriefe suchen
                </Button>

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
