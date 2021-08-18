import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import Header from "../header";
import ListRandom from "../listRandom";
import ItemList from "../itemList";
import ItemDetails from "../itemDetails";
import RowBlock from "../rowBlock";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedItemId: null,
    };
  }

  onItemClick = (id) => {
    this.setState({ selectedItemId: id });
  };

  render() {
    const { selectedItemId } = this.state;

    const itemList = (
      <ItemList 
        onCharClick={this.onItemClick}
        renderItem={(item) => `${item.name} (${item.gender})`}
      />
    )

    const itemDetails = (
      <ItemDetails selectedItemId={selectedItemId}/>
    )

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <ListRandom method="getCharacter" />
          </Row>
          <RowBlock leftCol={itemList} rigthCol={itemDetails} />
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
