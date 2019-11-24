import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoggedIn from './LoggedIn';
import Register from "./Auth/Register";
import Login from "./Auth/Login";

class Landing extends Component {
    render() {
        return (
            <Router>
                <div style={{ height: "75vh" }} className="container valign-wrapper">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>Willkommen bei <b>Dog Scout!</b></h4>
                            <p>Haben Sie schon ein Konto?</p>
                            <br />
                            <div className="col s6">
                                <Link to="/register"> Neuen Account erstellen! </Link>
                            </div>
                            <div className="col s6">
                                <Link to="/login"> Anmelden! </Link>
                            </div>
                            <div className="col s6">
                                <Link to="/content"> Schnell anmelden </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </Router>

        );
    }
}
export default Landing;