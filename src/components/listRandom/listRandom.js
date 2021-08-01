import React, { Component } from "react";
import "./listRandom.css";
import gotService from '../../api';
import View from './View';
import Spinner from '../Spinner';

export default class ListRandom extends Component {
  constructor() {
    super();
    this.state = {
      item: {},
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
    const { method } = this.props;
    const id = Math.floor(Math.random() * 100 + 25);
    this.gotService[method](id)
      .then((item) => { 
        this.setState({item, loading: false}); });
  }
  
  render() {
    const { item, loading } = this.state;

    return (
      <div className="random-block rounded">
        { loading || !Object.keys(item).length ? <Spinner /> : <View item={item}/> }
      </div>
    );
  }
}
