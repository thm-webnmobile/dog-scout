import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import UsersList from "./UsersList";
import MapComponent from "./MapComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MapPage.css";
import L from "leaflet";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.setId = this.setId.bind(this);
    this.state = {
      location: {
        lat: 50.321799,
        lng: 8.766996
      },
      locationInput: "",
      zoom: 2,
      usersAll: [],
      distance: "",
      haveUsersLocation: "",
      usersInRange: [],
      idState: 0
    };
  }

  UNSAFE_componentWillMount() {
    fetch("/api/usersForMap")
      .then(res => res.json())
      .then(usersRaw => {
        // Show only "i" amount of users (disregards users that register)
        let filteredUsers = [];
        for (let i = 0; i < usersRaw.length; i++) {
          if (i <= 18) {
            filteredUsers.push(usersRaw[i]);
          }
        }

        this.setState({ usersAll: filteredUsers });
      });

    fetch("/api/usersForMap")
      .then(res => res.json())
      .then(usersRaw => {
        // Show only "i" amount of users (disregards users that register)
        let filteredUsers = [];
        for (let i = 0; i < usersRaw.length; i++) {
          if (i <= 18) {
            filteredUsers.push(usersRaw[i]);
          }
        }

        this.setState({ usersInRange: filteredUsers });
      });
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
    this.giveInRangeUsers(1000000);
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

    this.state.usersAll.map(user =>
      locationA.distanceTo(new L.LatLng(user.location.lat, user.location.lng)) <
      selectedDistance
        ? inRangeUsers.push({
            location: new L.LatLng(user.location.lat, user.location.lng),
            _id: user._id,
            name: user.name,
            wohnort: user.wohnort,
            alter: user.alter,
            beschreibung: user.beschreibung,
            bild: user.bild
          })
        : ""
    );

    this.setState({ usersInRange: inRangeUsers });
  };

  handleChangedLocation = event => {
    this.setState({
      locationInput: event.target.value
    });
  };

  //Geocoding mit Photon Komoot
  handleNewLocation = event => {
    console.log(
      "http://photon.komoot.de/api/?q=" + this.state.locationInput + "&limit=1"
    );
    axios
      .get(
        "http://photon.komoot.de/api/?q=" +
          this.state.locationInput +
          "&limit=1"
      )
      .then(response =>
        this.setState({
          location: {
            lat: JSON.parse(response.request.response).features[0].geometry
              .coordinates[1],
            lng: JSON.parse(response.request.response).features[0].geometry
              .coordinates[0]
          }
        })
      )
      .catch(err => console.log(err));
  };

  setId(idInput) {
    this.setState({ idState: idInput }, function() {
      /* console.log("MapPage Component: " + this.state.idState); */
    });
  }

  render() {
    const idState = this.state.idState;
    return (
      <Row className="row">
        <Col xs={3} className="users-list">
          <Form id="formLocation" onSubmit={this.handleSubmit}>
            <FormGroup id="inputLocation">
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="Ihr Standort"
                value={this.state.locationInput}
                onChange={this.handleChangedLocation}
              />
            </FormGroup>
            <Button id="btnLocation" onClick={this.handleNewLocation}>
              <Image src="icons/search.png" />
            </Button>
            <FormGroup id="inputDistance">
              <Input type="select" name="select" id="exampleSelect">
                <option unselectable="true">Umkreis</option>
                <option
                  onClick={() => {
                    this.giveInRangeUsers(1000000);
                  }}
                >
                  kein Umkreis
                </option>
                <option
                  onClick={() => {
                    this.giveInRangeUsers(1000);
                  }}
                >
                  1 km
                </option>
                <option
                  onClick={() => {
                    this.giveInRangeUsers(2000);
                  }}
                >
                  2 km
                </option>
                <option
                  onClick={() => {
                    this.giveInRangeUsers(3000);
                  }}
                >
                  3 km
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
                    this.giveInRangeUsers(20000);
                  }}
                >
                  20 km
                </option>
              </Input>
            </FormGroup>
          </Form>
          <UsersList
            usersInRange={this.state.usersInRange}
            setId={idInput => this.setId(idInput)}
          />
        </Col>
        <Col xs={9} className="map-container">
          <MapComponent
            _id={idState}
            location={this.state.location}
            zoom={this.state.zoom}
            haveUsersLocation={this.state.haveUsersLocation}
            usersInRange={this.state.usersInRange}
          />
        </Col>
      </Row>
    );
  }
}

export default MapPage;
