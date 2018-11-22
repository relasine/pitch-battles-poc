import React, { Component } from "react";
import "../css/Player.css";

class Player extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className={`player ${this.props.type} ${this.props.status}`}>
        <div className={`player-hit ${this.props.status}`} />
      </div>
    );
  }
}

export default Player;
