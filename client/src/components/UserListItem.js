import React, { Component } from "react";
import { ListGroupItem } from "reactstrap";
import { Row, Col, Image } from "react-bootstrap";
import "./UserListItem.css";

class UserListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  shareClickedItem = idItem => {
    /* this.setState({
      id: idItem
    });
    console.log(this.state.id); */

    this.props.setId(idItem);
  };

  render() {
    return (
      <ListGroupItem
        action
        className="user-list-item"
        onClick={() => this.shareClickedItem(this.props.id)}
      >
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
