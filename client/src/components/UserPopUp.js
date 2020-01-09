import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Button } from "reactstrap";
import "./UserPopUp.css";

class UserPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <h4>{this.props.userCurrent.name}</h4>
        </Row>
        <Row>
          <Col xs={3} className="person-wrapper-popup">
            <Image
              src={this.props.userCurrent.bild}
              roundedCircle
              className="profile-pic"
            />
          </Col>
          <Col xs={9}>
            <span className="agePopUp">
              {"Alter: " + this.props.userCurrent.alter}
            </span>
            <br />
            <span>{this.props.userCurrent.beschreibung}</span>
            <Button
              variant="outline-primary"
              size="sm"
              className="profil-anzeigen-btn"
            >
              Profil anzeigen
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserPopUp;
