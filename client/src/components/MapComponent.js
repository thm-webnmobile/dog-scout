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

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
          <Marker position={[this.props.location.lat, this.props.location.lng]}>
            <Popup>You are here</Popup>
          </Marker>
        ) : (
          ""
        )}

        {/* Marker der anderen User */
        this.props.haveUsersLocation
          ? this.props.inRangeUsers.map(user => (
              <Marker position={[user.location.lat, user.location.lng]}>
                <Popup>
                  <UserPopUp userCurrent={user} />
                </Popup>
              </Marker>
            ))
          : ""}
      </Map>
    );
  }
}

export default MapComponent;
