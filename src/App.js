import React, { Component } from "react";
//#####Style Imports##########
import "./App.css";

//#####Component Imports##########
import Header from "./Components/header/Header";
import NavBar from "./Components/navBar/NavBar";
import About from "./Components/about/About";
import Calculator from "./Components/calculator/Calculator";
import Footer from "./Components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <About />
        <Calculator />
        <Footer />
      </div>
    );
  }
}

export default App;
