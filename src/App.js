import React, { Component } from "react";
import Home from "./components/Home/Home";
import Favs from "./components/Favs/Favs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentView: "home"
    };
  }

  render() {
    let { currentView } = this.state;
    return (
      <div>
        <nav>
          <button onClick={() => this.setState({ currentView: "home" })}>
            Home
          </button>
          <button onClick={() => this.setState({ currentView: "favs" })}>
            Favs
          </button>
        </nav>
        {currentView === "home" ? <Home /> : <Favs />}
      </div>
    );
  }
}

export default App;
