import React, { Component } from "react";
import "../css/Forest.css";

import Player from "./Player";
import Bird from "./Bird";
import Hearts from "./Hearts";
import Staff from "./Staff";
import Input from "./Input";

class Forest extends Component {
  constructor() {
    super();

    this.state = {
      playerStatus: "idle",
      playerHearts: [0, 0, 0],
      playerType: "player-one",
      birdStatus: "idle",
      birdHearts: ["a", "b", "c", "d", "e", "f", "g"],
      gameOver: false,
      currentPitch: undefined
    };

    this.timeouts = [];
  }

  componentDidMount() {
    this.setRandomPitch();
  }

  setRandomPitch() {
    const index = Math.floor(Math.random() * this.state.birdHearts.length);
    const currentPitch = this.state.birdHearts[index];
    this.setState({
      currentPitch
    });
  }

  submitLetter = guess => {
    if (guess === this.state.currentPitch) {
      this.playerAttack();
    } else {
      this.birdAttack();
    }
  };

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
    const index = this.state.birdHearts.findIndex(
      heart => heart === this.state.currentPitch
    );

    console.log(index);

    let birdHearts = this.state.birdHearts.map(heart => heart);
    birdHearts.splice(index, 1);

    if (birdHearts.length > 0) {
      this.setState({
        playerStatus: "idle",
        birdStatus: "idle",
        birdHearts
      });
      this.timeouts = this.timeouts.filter(timeout => {
        return timeout !== "hurtBirdTimeout";
      });
      this.setRandomPitch();
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
      birdStatus: "idle",
      birdHearts: ["a", "b", "c", "d", "e", "f", "g"],
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
            status={this.state.playerStatus}
          />
          <Bird status={this.state.birdStatus} />
          <Hearts char="bird-life" count={this.state.birdHearts} />
        </section>
        <Staff currentPitch={this.state.currentPitch} />
        <Input submitLetter={this.submitLetter} />
      </main>
    );
  }
}

export default Forest;
