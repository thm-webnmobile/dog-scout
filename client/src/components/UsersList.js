import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import axios from "axios";

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
      <Container>
        <ListGroup>
          {users.map(({ name, wohnort }) => (
            <ListGroupItem>
              <p>{name}</p>
              <p>{wohnort}</p>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default UsersList;
