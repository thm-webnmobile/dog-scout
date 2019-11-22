import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import UsersList from "./UsersList";
import Map from "./Map";
import "./MapPage.css";

function MapPage() {
  return (
    <Row>
      <Col xs={3} className="users-list">
        <UsersList />
      </Col>
      <Col xs={9} className="map-container">
        <Map />
      </Col>
    </Row>
  );
}

export default MapPage;
