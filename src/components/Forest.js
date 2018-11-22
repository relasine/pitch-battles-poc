import React, { Component } from "react";
import "../css/Forest.css";

import Player from "./Player";
import Bird from "./Bird";
import Hearts from "./Hearts";

class Forest extends Component {
  constructor() {
    super();

    this.state = {
      playerStatus: "idle",
      playerHearts: [0, 0, 0],
      birdStatus: "idle",
      birdHearts: [0, 0, 0],
      gameOver: false
    };
  }

  playerAttack = () => {
    if (
      this.state.playerStatus !== "attack" &&
      this.state.playerStatus !== "hit" &&
      !this.state.gameOver
    ) {
      this.setState({
        playerStatus: "attack",
        birdStatus: "hit"
      });

      setTimeout(this.hurtBird, 750);
    }
  };

  birdAttack = () => {
    if (
      this.state.birdStatus !== "attack" &&
      this.state.birdStatus !== "hit" &&
      !this.state.gameOver
    ) {
      this.setState({
        birdStatus: "attack",
        playerStatus: "hit"
      });

      setTimeout(this.hurtPlayer, 700);
    }
  };

  hurtBird = () => {
    let birdHearts = this.state.birdHearts.map(heart => heart);
    birdHearts.shift();

    if (birdHearts.length > 0) {
      this.setState({
        playerStatus: "idle",
        birdStatus: "idle",
        birdHearts
      });
    } else {
      this.setState({
        playerStatus: "idle",
        birdStatus: "dead",
        birdHearts,
        gameOver: true
      });
      setTimeout(this.victory, 3000);
    }
  };

  hurtPlayer = () => {
    let playerHearts = this.state.playerHearts.map(heart => heart);
    playerHearts.shift();

    if (playerHearts.length > 0) {
      this.setState({
        playerStatus: "idle",
        birdStatus: "idle",
        playerHearts
      });
    } else {
      this.setState({
        playerStatus: "dead",
        birdStatus: "idle",
        playerHearts,
        gameOver: true
      });
    }
  };

  victory = () => {
    this.setState({
      playerStatus: "victory"
    });
  };

  render() {
    return (
      <section className="forest">
        <Hearts char="player-life" count={this.state.playerHearts} />
        <Player attack={this.playerAttack} status={this.state.playerStatus} />
        <Bird attack={this.birdAttack} status={this.state.birdStatus} />
        <Hearts char="bird-life" count={this.state.birdHearts} />
      </section>
    );
  }
}

export default Forest;
