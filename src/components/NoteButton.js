import React from "react";

const NoteButton = props => {
  return (
    <div
      className={`${props.letter} pitch`}
      onClick={() => {
        props.submitLetter(props.letter);
      }}
    >
      {props.letter}
    </div>
  );
};

export default NoteButton;
