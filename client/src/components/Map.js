import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Map.css";

class Map extends Component {
  render() {
    return (
      <Image className="map" src="pics/map_placeholder.PNG" height="610" />
    );
  }
}

export default Map;
