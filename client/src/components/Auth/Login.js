import React, { Component, Toast } from "react";
import { Link } from "react-router-dom";
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';




class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    

    onSubmit = e => {

      

        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);

        axios.post('http://localhost:5000/api/users/login', userData)
            .then(res => console.log(res.data));

        //window.location='/'; //zurück zur Startseite
    };


    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-centered">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Zurück
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <br />
                            <h4>Anmelden</h4>
                            <p className="grey-text text-darken-1">
                                Sie haben noch keinen Account? <Link to="/register">Registrieren</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    placeholder="E-Mail"
                                    required
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
                                    required
                                />
                            </div>
                            <br />
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <Button variant="outline-dark" type="submit"> Login </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;