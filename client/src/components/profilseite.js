import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import Profilbild from "./profilbild-beispiel.jpg";
import { Form, FormGroup, FormControl, Accordion, Card } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation.js";


import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";


import axios from "axios";
const API_URL = "http://localhost:3000"; 

class Profilseite extends Component {

  constructor(props) {
    super(props);

    this.state = {
      multerImage: Profilbild
    }
  }

  setDefaultImage(uploadType) {
    if (uploadType === "multer") {
      this.setState({
        multerImage: Profilbild
      });
    }
  }

  // function to upload image once it has been captured
  // includes multer and firebase methods
  uploadImage(e, method) {
    //let imageObj = {};

    if (method === "multer") {

      let imageFormObj = new FormData();

      imageFormObj.append("imageName", "multer-image-" + Date.now());
      imageFormObj.append("imageData", e.target.files[0]);

      // stores a readable instance of 
      // the image being uploaded using multer
      this.setState({
        multerImage: URL.createObjectURL(e.target.files[0])
      });

      axios.post(`${API_URL}/image/uploadmulter`, imageFormObj)
        .then((data) => {
          if (data.data.success) {
            alert("Image has been successfully uploaded using multer");
            this.setDefaultImage("multer");
          }
        })
        .catch((err) => {
          alert("Error while uploading image using multer");
          console.log(err);
          this.setDefaultImage("multer");
        });
    }
  }

  //Upload File:
  /*<input type="file" name="avatar" onChange={(e) => this.uploadImage(e, "multer")} />
  <img width="120" height="auto" src={this.state.multerImage} alt="upload-image" />
*/

  render() {
    const { user } = this.props.auth;
    return (
      <Router>
        <Navigation />
        <div>
          <br />
          <Row>
            <Col sm={{ offset: 1 }}>
              <Container><h2>Profilbild</h2>
                <img
                  alt="Profilbild"
                  src={Profilbild}
                  width="120"
                  height="auto"
                  className="d-block"
                />
              </Container>

              <form action="/uploadphoto" encType="multipart/form-data" method="POST">
                <input type="file" name="picture" accept="image/*" />
                <input type="submit" value="Profilbild ändern"/>
              </form>

            </Col>
            <Col sm={{ offset: 1 }}>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Container>
                      <h3>Eigene Daten:</h3>
                    </Container>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>


                      <Form>
                        <Form.Check
                          type="checkbox"
                          name="Profilbeschreibung"
                          id="profil-Hundebesitzer"
                          label="Hundebesitzer"
                        />
                        <Form.Check
                          type="checkbox"
                          name="Profilbeschreibung"
                          id="profil-Gassigeher"
                          label="Gassigeher"
                        />
                        <br />
                        <br />
                        Name: {user.name}
                        <br />
                        E-Mail:
                        <br />
                        ID: {user._id}
                        <br />
                        Alter: 29
                        <br />

                        <br />
                        <FormGroup>
                          <FormControl
                            style={{ height: "100px" }}
                            componentclass="textarea"
                            placeholder="Beschreibung"
                          />
                          <br />
                        </FormGroup>
                      </Form>


                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

            </Col>
            <Col sm={{ offset: 1 }}>

              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Container>
                      <h3>Bilder:</h3>
                    </Container>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hier können Sie optional Ihrem Profil Bilder hinzufügen.</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Route exact path="/navigation" component={Navigation} />
        </div>
      </Router>
    );
  }
}



Profilseite.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Profilseite);
