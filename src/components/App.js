import React, { Component } from "react";
import "../css/App.css";

import Preloading from "./Preloading";
import Forest from "./Forest";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Forest />
        <div className="preloading">
          <Preloading />
        </div>
      </div>
    );
  }
}

export default App;
