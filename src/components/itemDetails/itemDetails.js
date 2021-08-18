import React, { Component } from "react";
import "./itemDetails.css";
import gotService from "../../api";

export default class ItemDetails extends Component {
  constructor() {
    super();
    this.gotService = new gotService();
    this.state = {
      character: null,
    };
  }

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItemId !== this.props.selectedItemId) this.updateChar();
  }

  updateChar() {
    if (!this.props.selectedItemId) return null;
    const { selectedItemId } = this.props;
    this.gotService.getCharacter(selectedItemId).then((char) => {
      this.setState({ character: char });
    });
  }

  render() {
    if (!this.state.character) {
      return (
        <div className="char-details rounded">
          <h4>Character not selected</h4>
        </div>
      );
    }

    const { name, gender, born, died, culture } = this.state.character;

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender || "—"}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born || "—"}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died || "—"}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture || "—"}</span>
          </li>
        </ul>
      </div>
    );
  }
}
