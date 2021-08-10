import React, { Component } from "react";
import { Button, Col, Row, Container } from "reactstrap";
import gotService from "../../api";
import Header from "../header";
import ListRandom from "../listRandom";
import ItemList from "../itemList";
import ItemDetails from "../itemDetails";
import RowBlock from "../rowBlock";

export default class App extends Component {
  constructor() {
    super();
    this.gotService = new gotService();
    this.state = {
      listRandomIsVisible: true,
      selectedItemId: null,
    };
  }

  toggleListRandom = () => {
    const { listRandomIsVisible } = this.state;
    this.setState({ listRandomIsVisible: !listRandomIsVisible });
  };

  onItemClick = (id) => {
    this.setState({ selectedItemId: id });
  };

  render() {
    const { listRandomIsVisible, selectedItemId } = this.state;

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
            <Col lg={{ size: 5, offset: 0 }}>
              {listRandomIsVisible ? <ListRandom method="getCharacter"/> : null}
              <Button color="primary" onClick={this.toggleListRandom}>
                Toggle component
              </Button>
            </Col>
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
