import React, { Component } from "react";
import "../css/Bird.css";

class Bird extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className={`bird ${this.props.status}`}>
        <div className={`bird-hit ${this.props.status}`} />
      </div>
    );
  }
}

export default Bird;
