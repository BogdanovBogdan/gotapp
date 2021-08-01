import React, { Component } from "react";
import { Button, Col, Row, Container } from "reactstrap";
import gotService from "../../api";
import Header from "../header";
import ListRandom from "../listRandom";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends Component {
  constructor() {
    super();
    this.gotService = new gotService();
    this.state = {
      listRandomIsVisible: true,
      selectedCharId: null,
    };
  }

  toggleRenderChar = () => {
    const { listRandomIsVisible } = this.state;
    this.setState({ listRandomIsVisible: !listRandomIsVisible });
  };

  onCharClick = (id) => {
    this.setState({ selectedCharId: id });
  };

  render() {
    const { listRandomIsVisible, selectedCharId } = this.state;

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {listRandomIsVisible ? <ListRandom method="getCharacter"/> : null}
              <Button color="primary" onClick={this.toggleRenderChar}>
                Toggle component
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="6">
              <ItemList 
                onCharClick={this.onCharClick}
                renderItem={(item) => `${item.name} (${item.gender})`}
                />
            </Col>
            <Col md="6">
              <CharDetails selectedCharId={selectedCharId}/>
            </Col>
          </Row>
        </Container>
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
