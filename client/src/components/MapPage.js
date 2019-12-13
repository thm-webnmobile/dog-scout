import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import UsersList from "./UsersList";
import MapComponent from "./MapComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MapPage.css";
import L from "leaflet";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 50.321799,
        lng: 8.766996
      },
      zoom: 2,
      users: [],
      distance: "",
      haveUsersLocation: "",
      inRangeUsersState: []
    };
  }

  componentWillMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));

    fetch("/users")
      .then(res => res.json())
      .then(inRangeUsersState => this.setState({ inRangeUsersState }));
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          haveUsersLocation: true,
          zoom: 10
        });
      },
      () => {
        // wenn keine erlaubnis zur standortabfrage gegeben wird, wird der standort anhand der ip-adresse ermittelt
        console.log("location permission denied");
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(location => {
            console.log(location);
            this.setState({
              location: {
                lat: location.latitude,
                lng: location.longitude
              },
              haveUsersLocation: true,
              zoom: 8
            });
          });
      }
    );
  }

  giveInRangeUsers = selectedDistance => {
    let inRangeUsers = [];
    let locationA = new L.LatLng(
      this.state.location.lat,
      this.state.location.lng
    );

    this.setState({
      distance: selectedDistance
    });

    console.log(selectedDistance);

    this.state.users.map(user =>
      locationA.distanceTo(new L.LatLng(user.location.lat, user.location.lng)) <
      selectedDistance
        ? inRangeUsers.push({
            location: new L.LatLng(user.location.lat, user.location.lng),
            name: user.name,
            wohnort: user.wohnort,
            bild: user.bild
          })
        : ""
    );

    this.setState({
      inRangeUsersState: inRangeUsers
    });

    console.log(inRangeUsers);
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
                    this.giveInRangeUsers(1000000);
                  }}
                >
                  kein Umkreis
                </option>
                <option
                  onClick={() => {
                    this.giveInRangeUsers(5000);
                  }}
                >
                  5 km
                </option>
                <option
                  onClick={() => {
                    this.giveInRangeUsers(10000);
                  }}
                >
                  10 km
                </option>
                <option
                  onClick={() => {
                    this.giveInRangeUsers(15000);
                  }}
                >
                  15 km
                </option>
                <option
                  onClick={() => {
                    this.giveInRangeUsers(20000);
                  }}
                >
                  20 km
                </option>
                <option
                  onClick={() => {
                    this.giveInRangeUsers(30000);
                  }}
                >
                  30 km
                </option>
                <option
                  onClick={() => {
                    this.giveInRangeUsers(50000);
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
          <UsersList inRangeUsers={this.state.inRangeUsersState} />
        </Col>
        <Col xs={9} className="map-container">
          <MapComponent
            location={this.state.location}
            zoom={this.state.zoom}
            haveUsersLocation={this.state.haveUsersLocation}
            inRangeUsers={this.state.inRangeUsersState}
          />
        </Col>
      </Row>
    );
  }
}

export default MapPage;
