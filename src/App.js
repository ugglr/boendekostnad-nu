import React, { Component } from "react";
//#####Style Imports##########
import "./App.css";
import Switch from "@material-ui/core/Switch";

//#####Component Imports##########
import Header from "./Components/header/Header";
import NavBar from "./Components/navBar/NavBar";
import About from "./Components/about/About";
import AptForm from "./Components/calculator/AptForm";
import HouseForm from "./Components/calculator/HouseForm";

class App extends Component {
  state = {
    toggle: false
  };

  handleToggle = async e => {
    await this.setState({ toggle: e.target.checked });
    console.log(this.state.toggle);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <About />

        <p style={{ marginLeft: "2rem" }}>
          Form1
          <Switch
            checked={this.state.toggle}
            onChange={this.handleToggle}
            color="primary"
          />
          Form2
        </p>
        {this.state.toggle && <AptForm />}
        {this.state.toggle || <HouseForm />}
      </div>
    );
  }
}

export default App;
