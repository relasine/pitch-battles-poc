import React, { Component } from "react";
import "../css/Forest.css";

import Player from "./Player";
import Bird from "./Bird";
import Hearts from "./Hearts";
import Staff from "./Staff";
import Input from "./Input";
import collection from "../collections.js";

class Forest extends Component {
  constructor() {
    super();

    this.state = {
      playerStatus: "idle",
      playerHearts: [0, 0, 0],
      playerType: "player-one",
      birdStatus: "idle",
      birdHearts: [],
      gameOver: false,
      currentPitch: undefined,
      level: 1,
      instrument: undefined
    };

    this.timeouts = [];
  }

  componentDidMount() {
    this.setupGame(this.props.instrument);
    window.addEventListener("keyup", this.submitLetter);
  }
  componentWillUnmount() {
    window.removeEventListener("keyup", this.submitLetter);
  }

  setupGame = (instrument = "flute") => {
    const birdHearts = collection[instrument].pitches.filter(pitch => {
      return pitch.level <= this.state.level;
    });
    this.setState(
      {
        birdHearts,
        instrument
      },
      this.setRandomPitch
    );
  };

  setRandomPitch = () => {
    const index = Math.floor(Math.random() * this.state.birdHearts.length);
    const currentPitch = this.state.birdHearts[index];

    this.setState({
      currentPitch
    });
  };

  submitLetter = (event, input) => {
    let guess;

    if (
      event &&
      (event.key === "a" ||
        event.key === "b" ||
        event.key === "c" ||
        event.key === "d" ||
        event.key === "e" ||
        event.key === "f" ||
        event.key === "g")
    ) {
      guess = event.key;
    } else if (event) {
      return;
    } else {
      guess = input;
    }

    if (guess === this.state.currentPitch.pitch) {
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
      const victoryTimeout = setTimeout(this.victory, 2000);
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
    this.setState(
      {
        playerStatus: "idle",
        playerHearts: [0, 0, 0],
        birdStatus: "idle",
        gameOver: false,
        level: 1
      },
      this.setupGame
    );
  };

  nextLevel = () => {
    if (this.state.playerStatus === "victory" && this.state.level < 4) {
      this.setState(
        {
          level: this.state.level + 1,
          playerStatus: "idle",
          birdStatus: "idle",
          gameOver: false
        },
        this.setupGame
      );
    }
  };

  render() {
    return (
      <main className="game-wrapper">
        <h1 className="game-title">PITCH BATTLES</h1>
        <p className="description">Identify the pitch! Slay the beast!</p>
        <div className="button-wrapper">
          <button onClick={this.switchGender}>switch character</button>
          <button onClick={this.resetGame}>reset</button>
        </div>
        <section className="forest" onClick={this.nextLevel}>
          <div className={`screen-filter ${this.state.playerStatus} `} />
          <h1 className={`victory-text ${this.state.playerStatus}`}>VICTORY</h1>
          {this.state.level < 4 && (
            <p className={`next-level-text ${this.state.playerStatus}`}>
              click to start the next level...
            </p>
          )}
          <h1 className={`game-over-text ${this.state.playerStatus}`}>
            GAME OVER
          </h1>
          <Hearts char="player-life" count={this.state.playerHearts} />
          <Player
            type={this.state.playerType}
            status={this.state.playerStatus}
          />
          <Bird status={this.state.birdStatus} />

          <Hearts char="bird-life" count={this.state.birdHearts} />
          <p className="current-level">Level {this.state.level}</p>
        </section>
        {this.state.currentPitch && (
          <Staff currentPitch={this.state.currentPitch.position} />
        )}
        <Input submitLetter={this.submitLetter} />
      </main>
    );
  }
}

export default Forest;
