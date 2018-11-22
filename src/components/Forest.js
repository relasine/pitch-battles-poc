import React, { Component } from "react";
import "../css/Forest.css";

import Player from "./Player";
import Bird from "./Bird";

class Forest extends Component {
  constructor() {
    super();

    this.state = {
      playerStatus: "idle",
      birdStatus: "idle"
    };
  }

  playerAttack = () => {
    if (
      this.state.playerStatus !== "attack" ||
      this.state.playerStatus !== "hit"
    ) {
      this.setState({
        playerStatus: "attack",
        birdStatus: "hit"
      });

      setTimeout(this.setIdle, 750);
    }
  };

  birdAttack = () => {
    if (this.state.birdStatus !== "attack" || this.state.birdStatus !== "hit") {
      this.setState({
        birdStatus: "attack",
        playerStatus: "hit"
      });

      setTimeout(this.setIdle, 700);
    }
  };

  setIdle = () => {
    this.setState({
      playerStatus: "idle",
      birdStatus: "idle"
    });
  };

  render() {
    return (
      <section className="forest">
        <Player attack={this.playerAttack} status={this.state.playerStatus} />
        <Bird attack={this.birdAttack} status={this.state.birdStatus} />
      </section>
    );
  }
}

export default Forest;
