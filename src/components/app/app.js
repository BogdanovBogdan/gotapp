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
      selectedCharId: null,
    };
  }

  toggleRenderChar = () => {
    const { renderCharIsVisible } = this.state;
    this.setState({ renderCharIsVisible: !renderCharIsVisible });
  };

  onCharClick = (id) => {
    this.setState({ selectedCharId: id });
  };

  render() {
    const { renderCharIsVisible, selectedCharId } = this.state;

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
              <CharDetails selectedCharId={selectedCharId}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
