import React, { Component } from "react";
import View from './View';
import Spinner from '../Spinner';
import gotService from "../../api";

export default class Block extends Component {
  constructor() {
    super();
    this.gotService = new gotService();
    this.state = {
      item: {},
      loading: true,
    }
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
    const { method } = this.props;
    const id = Math.floor(Math.random() * 100 + 25);
    this.gotService[method](id)
      .then((item) => { 
        this.setState({item, loading: false}); });
  }
  
  render() {
    const { loading, item } = this.state;

    return (
      <div className="random-block rounded">
        { loading || !Object.keys(item).length ? <Spinner /> : <View item={item}/> }
      </div>
    )
  }
}