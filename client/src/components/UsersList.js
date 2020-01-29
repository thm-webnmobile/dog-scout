import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import "./UsersList.css";
import UserListItem from "./UserListItem";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

class UsersList extends Component {
  setId = id => {
    /* console.log("UsersList Component: " + id); */
    this.props.setId(id);
  };

  render() {
    return (
      <ListGroup id="users-list-id">
        {this.props.usersInRange.map(({ name, wohnort, bild, _id }) => (
          <UserListItem
            _id={_id}
            name={name}
            wohnort={wohnort}
            bild={bild}
            setId={id => this.setId(id)}
          />
        ))}
      </ListGroup>
    );
  }
}

export default UsersList;
