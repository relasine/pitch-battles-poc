import React, { Component } from "react";
import "../css/Staff.css";

class Staff extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="staff">
        <div className={`clef ${this.props.clef}`} />
        <div className={`note ${this.props.currentPitch}`} />
      </div>
    );
  }
}

export default Staff;
