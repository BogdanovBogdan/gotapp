import React, { Component } from "react";
import "./itemList.css";
import gotService from "../../api";

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
    this.gotService = new gotService();
  }

  componentDidMount() {
    this.updateList();
  }

  updateList() {
    this.gotService.getAllCharacters().then((characters) => {
      this.setState({ characters });
      console.log({ state: this.state });
    });
  }

  renderList() {
    const { characters } = this.state;
    return characters.map((character, index) => (
      <li key={index} className="list-group-item">
        {character.name}
      </li>
    ));
  }

  render() {
    return <ul className="item-list list-group">{this.renderList()}</ul>;
  }
}
