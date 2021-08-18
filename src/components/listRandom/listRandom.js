import React, { Component } from "react";
import { Button, Col } from "reactstrap";
import "./listRandom.css";
import Block from "./block";
import gotService from '../../api';
export default class ListRandom extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    }
    this.gotService = new gotService();
  }

  onClick = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  }

  render() {
    const { method } = this.props;
    const { isVisible } = this.state;

    return (
      <Col lg={{ size: 5, offset: 0 }}>
        { isVisible ? <Block method={method}/> : null }
        <Button color="primary" onClick={this.onClick}>
          Toggle component
        </Button>
      </Col>
    );
  }
}
