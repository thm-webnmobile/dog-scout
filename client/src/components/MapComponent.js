import React, { Component } from "react";
import UserPopUp from "./UserPopUp";
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

const redIcon = L.icon({
  iconUrl: "../../icons/geo.svg",
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),

  iconSize: [43, 47], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [20, 43], // point of the icon which will correspond to marker's location
  shadowAnchor: [12, 64], // the same for the shadow
  popupAnchor: [0, -33], // point from which the popup should open relative to the iconAnchor
  className: "red-marker"
});

const blackIcon = L.icon({
  iconUrl: "../../icons/address.svg",
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),

  iconSize: [42, 46], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [20, 43], // point of the icon which will correspond to marker's location
  shadowAnchor: [12, 64], // the same for the shadow
  popupAnchor: [0, -33] // point from which the popup should open relative to the iconAnchor
});

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idOfClickedUser: undefined
    };
  }

  componentDidUpdate() {
    if (
      this.state.idOfClickedUser === undefined ||
      this.props._id !== this.state.idOfClickedUser
    ) {
      this.setState({
        idOfClickedUser: this.props._id
      });
    }
    /* console.log("MapComponent: " + this.props.id); */
  }

  getClickedUser() {
    const clickedUser = this.props.usersInRange.filter(
      user => user._id === this.state.idOfClickedUser
    );
    return clickedUser[0];
  }

  render() {
    const clickedUser = this.getClickedUser();
    /*     in einer variablen die koordinaten des roten markers speichern und mit den blauen marker vergleichen, wenn gleich dann wird der blaue marker nicht gerendert */

    return (
      <Map
        id="mapid"
        center={[this.props.location.lat, this.props.location.lng]}
        zoom={this.props.zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Marker des Users */
        this.props.haveUsersLocation ? (
          <Marker
            position={[this.props.location.lat, this.props.location.lng]}
            icon={blackIcon}
          >
            <Popup>You are here</Popup>
          </Marker>
        ) : (
          ""
        )}
        {/* Marker der anderen User */
        this.props.haveUsersLocation
          ? this.props.usersInRange.map(user => (
              <Marker
                position={[user.location.lat, user.location.lng]}
                key={user._id}
              >
                <Popup>
                  <UserPopUp userCurrent={user} />
                </Popup>
              </Marker>
            ))
          : ""}
        {clickedUser ? (
          <Marker
            position={[clickedUser.location.lat, clickedUser.location.lng]}
            icon={redIcon}
          >
            <Popup>
              <UserPopUp userCurrent={clickedUser} />
            </Popup>
          </Marker>
        ) : (
          ""
        )}
        )
      </Map>
    );
  }
}

export default MapComponent;
