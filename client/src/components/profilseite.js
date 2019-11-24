import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "C:/Users/roari/Desktop/reacttest2/dog-scout/client/src/App.css";
import Profilbild from './profilbild-beispiel.jpg';
import {Form, FormGroup, FormControl} from 'react-bootstrap';



class Profilseite extends Component {
  render() {
    return (
      <div className="Startseite">
        <br />
        <Row>
          <Col class="col" sm={{ offset: 1 }} class="col">
            <h2>Mein Profil</h2>
            <img
              alt="Profilbild"
              src={Profilbild}
              width="120"
              height="auto"
              className="d-block"
            />
          </Col>
          <Col class="col" sm={{ offset: 1 }}>
            <Form>
              <Form.Check type="checkbox" name="Profilbeschreibung" id="profil-Hundebesitzer" label="Hundebesitzer" />
              <Form.Check type="checkbox" name="Profilbeschreibung" id="profil-Gassigeher" label="Gassigeher" />
              Name: Marie Mustermann
              Alter: 29
              <FormGroup>
                <FormControl
                  style={{ height: '100px' }}
                  componentClass="textarea"
                  placeholder="Beschreibung"
                />
                <br />
                </FormGroup>
              
            </Form>
          </Col>
            <Col class="col" sm={{ offset: 1 }}>
              <h5>Bilder:</h5>
            </Col>
        </Row>
      </div>

        )
      }
    }
    
export default Profilseite;