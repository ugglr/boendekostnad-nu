import React, { Component } from "react";
import "./App.css";

//#####Component Imports##########
import Header from "./Components/header/Header";
import NavBar from "./Components/navBar/NavBar";
import About from "./Components/about/About";
import Calculator from "./Components/calculator/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <About />
        <Calculator />
      </div>
    );
  }
}

export default App;
