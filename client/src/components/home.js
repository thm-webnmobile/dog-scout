import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation';
import Content from "./content";
import { BrowserRouter as Router } from "react-router-dom";


class Home extends Component{
    render(){
        return(
            <Router>
                <Navigation/>
                <Content/>
            </Router>
        )
    }
}

export default Home;