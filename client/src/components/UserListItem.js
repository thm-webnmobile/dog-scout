import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { Row, Col, Image } from "react-bootstrap";

class UserListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ListGroupItem>
        <Row>
          <Col xs={3} className="person-wrapper">
            <Image
              src={this.props.bild}
              roundedCircle
              className="profile-pic"
            />
          </Col>
          <Col xs={9}>
            <h5>{this.props.name}</h5>
            <Image src="icons/location.png" />
            <span>{this.props.wohnort}</span>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

export default UserListItem;
