import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import UsersList from "./UsersList";
import MapComponent from "./MapComponent";
import "./MapPage.css";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <Row>
        <Col xs={3} className="users-list">
          <UsersList users={this.state.users} />
        </Col>
        <Col xs={9} className="map-container">
          <MapComponent users={this.state.users} />
        </Col>
      </Row>
    );
  }
}

export default MapPage;
