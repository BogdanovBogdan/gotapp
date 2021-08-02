import React, { Component } from "react";
import { Button, Col, Row, Container } from "reactstrap";
import gotService from "../../api";
import Header from "../header";
import ListRandom from "../listRandom";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import RowBlock from "../rowBlock";

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

    const itemList = () => (
      <ItemList 
        onCharClick={this.onCharClick}
        renderItem={(item) => `${item.name} (${item.gender})`}
      />
    )

    const charDetails = () => (
      <CharDetails selectedCharId={selectedCharId}/>
    )

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
          <RowBlock leftCol={itemList} rigthCol={charDetails} />
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
