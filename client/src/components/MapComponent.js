import React, { Component } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapComponent.css";

// Make the Marker Icon appear on map
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 50.321799,
        lng: 8.766996
      },
      haveUsersLocation: false,
      zoom: 2
    };
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

  giveInRangeUsers = (users, range) => {
    let inRangeUsers = [];
    let locationA = new L.LatLng(
      this.state.location.lat,
      this.state.location.lng
    );
    let locationB;

    users.map(user =>
      locationA.distanceTo(new L.LatLng(user.location.lat, user.location.lng)) <
      range
        ? inRangeUsers.push({
            location: new L.LatLng(user.location.lat, user.location.lng),
            name: user.name
          })
        : ""
    );

    console.log(inRangeUsers);
    return inRangeUsers;
  };

  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    return (
      <Map id="mapid" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker des Users */
        this.state.haveUsersLocation ? (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        ) : (
          ""
        )}

        {/* Marker der anderen User */
        this.state.haveUsersLocation
          ? this.giveInRangeUsers(this.props.users, 70000).map(user => (
              <Marker position={[user.location.lat, user.location.lng]}>
                <Popup>{user.name}</Popup>
              </Marker>
            ))
          : ""}
      </Map>
    );
  }
}

export default MapComponent;
