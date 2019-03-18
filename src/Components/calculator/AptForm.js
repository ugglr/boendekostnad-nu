import React from "react";

//#####Component Import#####
import Slider from "./Slider";

class AptForm extends React.Component {
  state = {
    slutpris: 2500000,
    cashDeposit: 15,
    interestRate: 2,
    payments: 2,
    sum: null
  };

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    this.updateSum();
  };

  updateSum = async () => {
    let slutpris = parseInt(this.state.slutpris);
    let cashDeposit = parseInt(this.state.cashDeposit) / 100;
    let loanSize = slutpris - slutpris * cashDeposit;
    let interestRate = parseFloat(this.state.interestRate) / 100;
    let payments = ((parseFloat(this.state.payments) / 100) * loanSize) / 12;
    let monthCost = (loanSize * interestRate) / 12 + payments;
    await this.setState({
      sum: monthCost
    });
  };

  render() {
    return (
      <form>
        <div className="slide__container">
          {/*Slutpris */}
          <Slider
            sliderLabel={"Estimerat Slutpris:"}
            name={"slutpris"}
            minValue={"750000"}
            maxValue={"8500000"}
            stepSize={"5000"}
            defaultValue={"2500000"}
            handleChange={this.handleChange}
          />

          <span>Value: {this.state.slutpris} SEK</span>
          <br />
          <br />

          {/*Kontantinsats */}
          <Slider
            sliderLabel={"Kontantinsats (%):"}
            name={"cashDeposit"}
            minValue={"15"}
            maxValue={"100"}
            stepSize={"1"}
            defaultValue={"15"}
            handleChange={this.handleChange}
          />
          <span>Value: {this.state.cashDeposit}%</span>
          <br />
          <br />

          {/*Räntesats */}
          <Slider
            sliderLabel={"Ränta (%)"}
            name={"interestRate"}
            minValue={"1"}
            maxValue={"10"}
            stepSize={".01"}
            defaultValue={"2"}
            handleChange={this.handleChange}
          />
          <span>Value: {this.state.interestRate}%</span>
          <br />
          <br />

          {/*Räntesats */}
          <Slider
            sliderLabel={"Ammortering (%/år):"}
            name={"payments"}
            minValue={"0"}
            maxValue={"5"}
            stepSize={".1"}
            defaultValue={"2"}
            handleChange={this.handleChange}
          />
          <span>Value: {this.state.payments}</span>
          <br />
          <br />

          <span>Value: {this.state.sum}</span>
        </div>
      </form>
    );
  }
}

export default AptForm;
