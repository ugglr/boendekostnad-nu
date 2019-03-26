import React, { Component } from "react";

//#####Style Imports##########
import "./App.css";

//#####Component Imports##########
import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Calculator from "./Components/calculator/Calculator";
import Footer from "./Components/footer/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
        <Calculator />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
