import React, { Component } from "react";
import "./itemList.css";
import gotService from "../../api";
import Spinner from "../Spinner";

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      loading: true,
    };
    this.gotService = new gotService();
  }

  componentDidMount() {
    this.updateList();
  }

  updateList() {
    this.gotService.getAllCharacters().then((characters) => {
      this.setState({ characters, loading: false });
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
    const { loading } = this.state;

    return (
      <ul className="item-list list-group">
        {loading ? <Spinner /> : this.renderList()}
      </ul>
    );
  }
}
