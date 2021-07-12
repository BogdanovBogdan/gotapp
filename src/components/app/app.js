import React, { Component } from "react";
import { Button, Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      renderCharIsVisible: true,
    };
  }

  toggleRenderChar = () => {
    const { renderCharIsVisible } = this.state;
    this.setState({ renderCharIsVisible: !renderCharIsVisible });
  };

  render() {
    const { renderCharIsVisible } = this.state;

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {renderCharIsVisible ? <RandomChar /> : null}
              <Button color="primary" onClick={this.toggleRenderChar}>
                Toggle component
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
