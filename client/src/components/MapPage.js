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
      users: [],
      distance: ""
    };
  }

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  handleDistanceChange = selectedDistance => {
    this.setState({
      distance: selectedDistance
    });
    console.log("Parameter: " + selectedDistance);
    console.log("State: " + this.state.distance);
  };

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
              <Input type="select" name="select" id="exampleSelect">
                <option unselectable>Umkreis</option>
                <option
                  onClick={() => {
                    this.handleDistanceChange(1000000);
                  }}
                >
                  kein Umkreis
                </option>
                <option
                  onClick={() => {
                    this.handleDistanceChange(5000);
                  }}
                >
                  5 km
                </option>
                <option
                  onClick={() => {
                    this.handleDistanceChange(10000);
                  }}
                >
                  10 km
                </option>
                <option
                  onClick={() => {
                    this.handleDistanceChange(15000);
                  }}
                >
                  15 km{" "}
                </option>
                <option
                  onClick={() => {
                    this.handleDistanceChange(20000);
                  }}
                >
                  20 km
                </option>
                <option
                  onClick={() => {
                    this.handleDistanceChange(30000);
                  }}
                >
                  30 km
                </option>
                <option
                  onClick={() => {
                    this.handleDistanceChange(50000);
                  }}
                >
                  50 km
                </option>
              </Input>
            </FormGroup>
            {/* <Button id="btnLocation" type="submit">
              <Image src="icons/search.png" />
            </Button> */}
          </Form>
          <UsersList users={this.state.users} distance={this.state.distance} />
        </Col>
        <Col xs={9} className="map-container">
          <MapComponent
            users={this.state.users}
            distance={this.state.distance}
          />
        </Col>
      </Row>
    );
  }
}

export default MapPage;
