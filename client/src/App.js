import React, { Component, Profiler } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import Landing from "./components/landing";
import Content from './components/content';
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profilseite from "./components/profilseite";
import LoggedIn from "./components/LoggedIn";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import { Alert } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/sethAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="Hintergrund App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/content" component={Content} />
            <Route exact path="/navigation" component={Navigation} />
            <Switch>
              <PrivateRoute exact path = "/home" component={Home} />
              <PrivateRoute exact path = "/profilseite" component={Profilseite} />
            </Switch>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
