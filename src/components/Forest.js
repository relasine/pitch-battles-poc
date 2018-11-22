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
      playerType: "player-one",
      birdStatus: "idle",
      birdHearts: [0, 0, 0],
      gameOver: false
    };

    this.timeouts = [];
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

      const hurtBirdTimeout = setTimeout(this.hurtBird, 750);
      this.timeouts.push(hurtBirdTimeout);
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

      const hurtPlayerTimeout = setTimeout(this.hurtPlayer, 700);
      this.timeouts.push(hurtPlayerTimeout);
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
      this.timeouts = this.timeouts.filter(timeout => {
        return timeout !== "hurtBirdTimeout";
      });
    } else {
      this.setState({
        playerStatus: "idle",
        birdStatus: "dead",
        birdHearts,
        gameOver: true
      });
      this.timeouts = this.timeouts.filter(timeout => {
        return timeout !== "hurtBirdTimeout";
      });
      const victoryTimeout = setTimeout(this.victory, 3000);
      this.timeouts.push(victoryTimeout);
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
      this.timeouts = this.timeouts.filter(timeout => {
        return timeout !== "hurtPlayerTimeout";
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
    this.timeouts = this.timeouts.filter(timeout => {
      return timeout !== "victoryTimeout";
    });
  };

  switchGender = () => {
    if (this.state.gameOver) {
      return;
    }
    if (this.state.playerType === "player-one") {
      this.setState({
        playerType: "player-two"
      });
    } else {
      this.setState({
        playerType: "player-one"
      });
    }
  };

  resetGame = () => {
    this.timeouts.forEach(timeout => {
      clearTimeout(timeout);
    });
    this.setState({
      playerStatus: "idle",
      playerHearts: [0, 0, 0],
      playerType: "player-one",
      birdStatus: "idle",
      birdHearts: [0, 0, 0],
      gameOver: false
    });
  };

  render() {
    return (
      <main className="game-wrapper">
        <div className="button-wrapper">
          <button onClick={this.switchGender}>switch character</button>
          <button onClick={this.resetGame}>reset</button>
        </div>
        <section className="forest">
          <Hearts char="player-life" count={this.state.playerHearts} />
          <Player
            type={this.state.playerType}
            attack={this.playerAttack}
            status={this.state.playerStatus}
          />
          <Bird attack={this.birdAttack} status={this.state.birdStatus} />
          <Hearts char="bird-life" count={this.state.birdHearts} />
        </section>
      </main>
    );
  }
}

export default Forest;
