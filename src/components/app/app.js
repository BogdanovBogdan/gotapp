import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "../header";
import CharacterPage from "../character";

export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Header />
        </Container>
        <CharacterPage />
        {/* <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <ListRandom method="getHouse"/>
            </Col>
          </Row>
        </Container> */}
      </>
    );
  }
}
