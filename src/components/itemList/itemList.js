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
    return characters.map((character, index) => {
      const label = this.props.renderItem(character);
      return (
        <li
          key={character.id}
          className="list-group-item"
          onClick={() => this.props.onCharClick(character.id)}
        >
          {label}
        </li>
      )
    });
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
