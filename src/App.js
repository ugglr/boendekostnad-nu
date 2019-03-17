import React, { Component } from "react";
import "./App.css";

//#####Component Imports##########
import Header from "./Components/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
