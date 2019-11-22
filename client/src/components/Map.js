import React, { Component } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Map.css";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const mymap = L.map("mapid").setView([50.337175, 8.736563], 10);
    const attribution =
      '&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
  }

  render() {
    return (
      <div id="mapid"></div>
      // <Image className="map" src="pics/map_placeholder.PNG" height="610" />
    );
  }
}

export default Map;
