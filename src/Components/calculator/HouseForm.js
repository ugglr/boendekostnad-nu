import React from "react";

//#####Component Import#####
import Slider from "./Slider";

class HouseForm extends React.Component {
  state = {
    slider1: 20,
    slider2: 30,
    sum: 50
  };

  handleChange1 = async e => {
    await this.setState({ slider1: e.target.value });
    this.updateSum();
  };

  handleChange2 = async e => {
    await this.setState({ slider2: e.target.value });
    this.updateSum();
  };

  updateSum = () => {
    const slider1Val = parseInt(this.state.slider1);
    const slider2Val = parseInt(this.state.slider2);
    this.setState({
      sum: slider1Val + slider2Val
    });
  };

  render() {
    return (
      <form>
        <div className="slide__container">
          {/*Slider 1 */}
          <Slider
            sliderLabel={"Slider1"}
            name={"slider1"}
            minValue={"1"}
            maxValue={"100"}
            stepSize={"1"}
            defaultValue={"20"}
            handleChange={this.handleChange1}
          />

          <span>Value: {this.state.slider1}</span>
          <br />
          <br />

          {/*Slider 2 */}
          <Slider
            sliderLabel={"Slider2"}
            name={"slider2"}
            minValue={"1"}
            maxValue={"100"}
            stepSize={"1"}
            defaultValue={"20"}
            handleChange={this.handleChange2}
          />
          <span>Value: {this.state.slider2}</span>
          <br />
          <br />

          <span>Value: {this.state.sum}</span>
        </div>
      </form>
    );
  }
}

export default HouseForm;
