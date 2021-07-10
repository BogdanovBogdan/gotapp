import React, { Component } from "react";
import "./randomChar.css";
import gotService from '../../api';
import View from './View';

export default class RandomChar extends Component {
  constructor() {
    super();
    this.updateCharacter();
  }
  
  gotService = new gotService();
  state = {
    character: {},
  }
  
  updateCharacter() {
    const id = Math.floor(Math.random() * 100 + 25);
    this.gotService.getCharacter(id)
      .then((character) => { this.setState({character}); });
  }
  
  render() {
    const { character } = this.state;
    return (
      <div className="random-block rounded">
        <View character={character} />
      </div>
    );
  }
}
