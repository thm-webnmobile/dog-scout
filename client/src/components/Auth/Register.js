import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Alert } from 'react-bootstrap';
import 'whatwg-fetch';

import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);

        axios.post('http://localhost:5000/api/users/register', newUser)
            .then(res => console.log(res.data));
        //window.location='/'; //zurück zur Startseite
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-centered ">
                        <Link to="/">
                            <i className="material-icons left">keyboard_backspace</i> Zurück
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <br />
                            <h4>Registrierung</h4>
                            <p className="grey-text text-darken-1">
                                Sie haben bereits einen Account? <Link to="/login">Einloggen</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    name="name"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <br />
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    placeholder="E-Mail"
                                />
                            </div>
                            <br />
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    placeholder="Passwort"
                                />
                            </div>
                            <br />
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                    placeholder="Passwort Bestätigung"
                                />
                            </div>
                            <br />
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <Button variant="outline-dark"
                                    type="submit"
                                >Registrieren</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;