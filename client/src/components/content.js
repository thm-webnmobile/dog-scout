import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import "C:/Users/roari/Desktop/reacttest2/dog-scout/client/src/App.css";
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import Profilseite from './profilseite';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";



class Content extends Component {

    render() {
        const { user } = this.props.auth; //!!!
        return (
            <Router>
                <div>
                    <div className="Suche">
                        <br />

                        <h1 className="space">Willkommen,  <b>{user.name.split(" ")[0]}!</b></h1> 
                        
                        <br />
                        <div className="centered">
                            <Form className="border border-secondary Formular rounded-sm">
                            <h2 className="centered">Ich suche...</h2>
                            <br/>
                                <Form.Check type="radio" name="Suche" id="Hundebesitzer" label="... Hundebesitzer" />
                                <Form.Check type="radio" name="Suche" id="Gassigeher" label="... Gassigeher" />
                                <br />
                                <Button className="button-style" variant="outline-dark" type="submit">Steckbriefe suchen</Button>

                                <br />
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

        )
    }
}

Content.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Content);
