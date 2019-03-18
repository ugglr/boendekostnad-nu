import React, { Component } from "react";

import Switch from "@material-ui/core/Switch";

import HouseForm from "./HouseForm";
import AptForm from "./AptForm";
import Results from "./Results/Results";

import "./calculator.css";

class Calculator extends Component {
  state = {
    toggle: false
  };

  handleToggle = async e => {
    await this.setState({ toggle: e.target.checked });
    console.log(this.state.toggle);
  };

  render() {
    return (
      <React.Fragment>
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

        <Results />
      </React.Fragment>
    );
  }
}

export default Calculator;
