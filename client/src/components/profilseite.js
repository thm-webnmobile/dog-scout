import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "C:/Users/roari/Desktop/reacttest2/dog-scout/client/src/App.css";
import Profilbild from './profilbild-beispiel.jpg';
import {Form, FormGroup, FormControl} from 'react-bootstrap';



class Profilseite extends Component {
  render() {
    return (
      <div>
        <br />
        <Row>
          <Col className="col" sm={{ offset: 1 }} className="col">
            <h2>Mein Profil</h2>
            <img
              alt="Profilbild"
              src={Profilbild}
              width="120"
              height="auto"
              className="d-block"
            />
          </Col>
          <Col className="col" sm={{ offset: 1 }}>
            <Form>
              <Form.Check type="checkbox" name="Profilbeschreibung" id="profil-Hundebesitzer" label="Hundebesitzer" />
              <Form.Check type="checkbox" name="Profilbeschreibung" id="profil-Gassigeher" label="Gassigeher" />
              <br/>
              <br/>
              Name: Marie Mustermann
              <br/>
              <br/>
              Alter: 29
              <br/>
              <br/>
              <FormGroup>
                <FormControl
                  style={{ height: '100px' }}
                  componentclass="textarea"
                  placeholder="Beschreibung"
                />
                <br />
                </FormGroup>
              
            </Form>
          </Col>
            <Col className="col" sm={{ offset: 1 }}>
              <h5>Bilder:</h5>
            </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        
        </div>

        )
      }
    }
    
export default Profilseite;