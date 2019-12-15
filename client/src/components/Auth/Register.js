import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
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

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
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

        this.props.registerUser(newUser, this.props.history);
        console.log(newUser);

        axios.post('http://localhost:5000/api/users/register', newUser)
            .then(res => console.log(res.data));
        //window.location='/'; //zurück zur Startseite
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <br/>
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
                            <label htmlFor="name">Name:</label>
                                <br/>
                                <input
                                    name="name"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                    //placeholder="Name"
                                    className={classnames("", {
                                        invalid: errors.name
                                    })}
                                />
                                <br/>
                                <span className="red-text">{errors.name}</span>
                            </div>
                            <br />
                            <div className="input-field col s12">
                            <label htmlFor="email">Email:</label>
                                <br/>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    //placeholder="E-Mail"
                                    className={classnames("", {
                                        invalid: errors.email
                                    })}
                                />
<br/>
                                <span className="red-text">{errors.email}</span>
                            </div>
                            <br />
                            <div className="input-field col s12">
                            <label htmlFor="password">Passwort:</label>
                            <br/>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    //placeholder="Passwort"
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                />
<br/>
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <br />
                            <div className="input-field col s12">
                            <label htmlFor="password2">Passwort Bestätigung:</label>
                                <br/>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                    //placeholder="Passwort Bestätigung"
                                    className={classnames("", {
                                        invalid: errors.password2
                                    })}
                                />
                                <br/>
                                <span className="red-text">{errors.password2}</span>
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
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));