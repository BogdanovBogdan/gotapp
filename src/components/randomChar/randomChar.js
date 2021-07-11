import React, { Component } from "react";
import "./randomChar.css";
import gotService from '../../api';
import View from './View';
import Spinner from '../Spinner';

export default class RandomChar extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
      loading: true,
    }
    this.gotService = new gotService();
  }
  
  componentDidMount() {
    this.updateCharacter()
    this.timerId = setInterval(() => {
      this.updateCharacter();
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  
  updateCharacter() {
    const id = Math.floor(Math.random() * 100 + 25);
    this.gotService.getCharacter(id)
      .then((character) => { this.setState({character, loading: false}); });
  }
  
  render() {
    const { character, loading } = this.state;
    return (
      <div className="random-block rounded">
        { loading ? <Spinner /> : <View character={character}/> }
      </div>
    );
  }
}
