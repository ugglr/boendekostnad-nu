import React from "react";

class AptForm extends React.Component {
  state = {
    slider1: 20,
    slider2: 30,
    slider3: 40,
    slider4: 50,
    slider5: 60,
    sum: 200
  };

  handleChange1 = async e => {
    await this.setState({ slider1: e.target.value });
    this.updateSum();
  };

  handleChange2 = async e => {
    await this.setState({ slider2: e.target.value });
    this.updateSum();
  };

  handleChange3 = async e => {
    await this.setState({ slider2: e.target.value });
    this.updateSum();
  };

  handleChange4 = async e => {
    await this.setState({ slider2: e.target.value });
    this.updateSum();
  };

  handleChange5 = async e => {
    await this.setState({ slider2: e.target.value });
    this.updateSum();
  };

  updateSum = () => {
    const slider1Val = parseInt(this.state.slider1);
    const slider2Val = parseInt(this.state.slider2);
    this.setState({ sum: slider1Val + slider2Val });
  };

  render() {
    return (
      <form>
        <div className="slide__container">
          {/*Slider 1 */}
          <label>Slider 1</label>
          <input
            className="slider"
            type="range"
            name="slider1"
            min="1"
            max="100"
            step="1"
            defaultValue="20"
            onChange={this.handleChange1}
          />
          <span>Value: {this.state.slider1}</span>
          <br />
          <br />

          {/*Slider 2 */}
          <label>Slider 2</label>
          <input
            className="slider"
            type="range"
            name="slider2"
            min="1"
            max="100"
            step="1"
            defaultValue="30"
            onChange={this.handleChange2}
          />
          <span>Value: {this.state.slider2}</span>
          <br />
          <br />

          {/*Slider 3 */}
          <label>Slider 3</label>
          <input
            className="slider"
            type="range"
            name="slider3"
            min="1"
            max="100"
            step="1"
            defaultValue="30"
            onChange={this.handleChange3}
          />
          <span>Value: {this.state.slider3}</span>
          <br />
          <br />

          {/*Slider 4 */}
          <label>Slider 4</label>
          <input
            className="slider"
            type="range"
            name="slider4"
            min="1"
            max="100"
            step="1"
            defaultValue="30"
            onChange={this.handleChange4}
          />
          <span>Value: {this.state.slider4}</span>
          <br />
          <br />

          {/*Slider 5 */}
          <label>Slider 5</label>
          <input
            className="slider"
            type="range"
            name="slider5"
            min="1"
            max="100"
            step="1"
            defaultValue="30"
            onChange={this.handleChange5}
          />
          <span>Value: {this.state.slider5}</span>
          <br />
          <br />

          <span>Value: {this.state.sum}</span>
        </div>
      </form>
    );
  }
}

export default AptForm;
