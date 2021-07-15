import React, { Component } from "react";
import { Button, Col, Row, Container } from "reactstrap";
import gotService from "../../api";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends Component {
  constructor() {
    super();
    this.gotService = new gotService();
    this.state = {
      renderCharIsVisible: true,
      selectedChar: null,
    };
  }

  toggleRenderChar = () => {
    const { renderCharIsVisible } = this.state;
    this.setState({ renderCharIsVisible: !renderCharIsVisible });
  };

  onCharClick = (id) => {
    gotService.getCharacter(id).then((char) => {
      this.setState({ selectedChar: char });
    });
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
              <ItemList onCharClick={this.onCharClick} />
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
