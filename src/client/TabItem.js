import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import emitter from "./ev"

export default class TabItem extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const select = () => {
      return () => {
        emitter.emit("selectNewTimestamp", this.props.time);
      }
    };
    return (
      <li className="nav-item">
        <a className={"nav-link " + this.props.active} href='#' onClick={select()}>{this.props.time}</a>
      </li>
    );
  }
}