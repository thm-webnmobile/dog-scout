import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import UsersList from "./UsersList";
import MapComponent from "./MapComponent";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <Form id="formLocation" onSubmit={this.handleSubmit}>
            <FormGroup id="inputLocation">
              <Input
                type="search"
                name="location"
                id="location"
                placeholder="Ihr Standort"
              />
            </FormGroup>
            <FormGroup id="inputDistance">
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={this.handleDistanceChange}
              >
                <option unselectable>Umkreis</option>
                <option>kein Umkreis</option>
                <option>1 km</option>
                <option>2 km </option>
                <option>3 km</option>
                <option>4 km</option>
                <option>5 km</option>
                <option>10 km</option>
                <option>15 km </option>
                <option>20 km</option>
                <option>30 km</option>
                <option>50 km</option>
              </Input>
            </FormGroup>
            <Button id="btnLocation" type="submit">
              <Image src="icons/search.png" />
            </Button>
          </Form>
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
