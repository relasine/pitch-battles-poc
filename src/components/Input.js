import React, { Component } from "react";
import "../css/Input.css";

import NoteButton from "./NoteButton";

class Input extends Component {
  constructor() {
    super();
  }

  render() {
    const { submitLetter } = this.props;

    return (
      <section className="input-section">
        <NoteButton submitLetter={submitLetter} letter="a" />
        <NoteButton submitLetter={submitLetter} letter="b" />
        <NoteButton submitLetter={submitLetter} letter="c" />
        <NoteButton submitLetter={submitLetter} letter="d" />
        <NoteButton submitLetter={submitLetter} letter="e" />
        <NoteButton submitLetter={submitLetter} letter="f" />
        <NoteButton submitLetter={submitLetter} letter="g" />
      </section>
    );
  }
}

export default Input;
