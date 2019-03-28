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
    toggle: true
  };

  handleToggle = async e => {
    await this.setState({ toggle: e.target.checked });
    console.log(this.state.toggle);
  };

  render() {
    return (
      <React.Fragment>
        <div style={switchBoxStyle}>
          <span style={{ fontSize: "1.3rem" }}>
            <strong>Bostadsrätt eller Fastighet?</strong>
          </span>
          <Switch
            checked={this.state.toggle}
            onChange={this.handleToggle}
            color="primary"
            style={{ color: "#1d809f" }}
          />
        </div>
        {this.state.toggle && <AptCalculator />}
        {this.state.toggle || <HouseCalculator />}
      </React.Fragment>
    );
  }
}

var switchBoxStyle = {
  marginTop: "1.4rem",
  marginLeft: "4.7rem",
  marginRight: "1.5rem",
  borderStyle: "solid",
  borderWidth: "3px",
  borderColor: "#1d809f",
  padding: "4px",
  width: "22rem"
};

export default Calculator;
