import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import "./UsersList.css";
import UserListItem from "./UserListItem";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

class UsersList extends Component {
  render() {
    return (
      <ListGroup id="users-list-id">
        {this.props.inRangeUsers.map(({ name, wohnort, bild }) => (
          <UserListItem name={name} wohnort={wohnort} bild={bild} />
        ))}
      </ListGroup>
    );
  }
}

export default UsersList;
