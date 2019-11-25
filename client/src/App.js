import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import Landing from "./components/landing";
import Content from './components/content';
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profilseite from "./components/profilseite";
import LoggedIn from "./components/LoggedIn";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import { Alert} from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="Hintergrund App">
          <Navigation />
          <br/>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/content" component={Content} />
        </div>
      </Router>
    );
  }
}

export default App;
