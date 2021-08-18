import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import ListRandom from "../listRandom";
import RowBlock from "../rowBlock";
import ItemList from "../itemList";
import ItemDetails from "../itemDetails";

export default class CharacterPage extends Component {
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
      <Container>
        <Row>
          <ListRandom method="getCharacter" />
        </Row>
        <RowBlock leftCol={itemList} rigthCol={itemDetails} />
      </Container>
    )
  }
}
