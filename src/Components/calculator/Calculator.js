import React, { Component } from "react";

//Local Component Imports
import AptCalculator from "./aptCalculator/AptCalculator";
import HouseCalculator from "./houseCalculator/HouseCalculator";
//External Libraries Import
import Switch from "@material-ui/core/Switch";
//Style import
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
          <Switch
            checked={this.state.toggle}
            onChange={this.handleToggle}
            color="primary"
          />
          Bostadsrätt
        </p>
        {this.state.toggle && <AptCalculator />}
        {this.state.toggle || <HouseCalculator />}
      </React.Fragment>
    );
  }
}

export default Calculator;
