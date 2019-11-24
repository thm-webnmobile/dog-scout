import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { Row, Col, Image } from "react-bootstrap";
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
