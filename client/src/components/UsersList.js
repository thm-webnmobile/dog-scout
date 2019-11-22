import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import "./UsersList.css";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
    /* axios
      .get("/users")
      .then(res => {
        this.setState({ users: Response.data });
      })
      .catch(err => {
        console.log(err);
      }); */
  }

  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <ListGroup id="users-list-id">
        {users.map(({ name, wohnort, bild }) => (
          <ListGroupItem>
            <Row>
              <Col xs={3} className="person-wrapper">
                <Image src={bild} roundedCircle className="profile-pic" />
              </Col>
              <Col xs={9}>
                <h5>{name}</h5>
                <Image src="icons/location.png" />
                <span>{wohnort}</span>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default UsersList;
