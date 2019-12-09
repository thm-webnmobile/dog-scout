import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import "./UsersList.css";
import UserListItem from "./UserListItem";

class UsersList extends Component {
  render() {
    return (
      <ListGroup id="users-list-id">
        {this.props.users.map(({ name, wohnort, bild }) => (
          <UserListItem name={name} wohnort={wohnort} bild={bild} />
        ))}
      </ListGroup>
    );
  }
}

export default UsersList;
