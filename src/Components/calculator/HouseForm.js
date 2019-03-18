import React from "react";

//#####Component Import#####
import Slider from "./Slider";

import "./calculator.css";

class HouseForm extends React.Component {
  state = {
    slutpris: 2500000,
    cashDepositPercentage: 15,
    interestRate: 2,
    yearlyPaymentsPercentage: 2,
    yearlyRunningCost: 50000,
    sum: 11250
  };

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    this.updateSum();
  };

  updateSum = async () => {
    //Price of House
    let slutpris = parseInt(this.state.slutpris);
    //Percentage of final price up front
    let cashDepositPercentage =
      parseInt(this.state.cashDepositPercentage) / 100;
    //The size of the loan
    let loanSize = slutpris - slutpris * cashDepositPercentage;
    //Yearly interest rate of on the loan
    let interestRate = (parseFloat(this.state.interestRate) / 100).toFixed(6);
    //Monthly cost in interest on the loan
    let monthlyInterestPayments = (loanSize * interestRate) / 12;
    //The percentage of the loan being payed off every year
    let yearlyPaymentsPercentage =
      parseFloat(this.state.yearlyPaymentsPercentage) / 100;
    //The amount being payed off towards the loan each month in
    let monthlyPaymentsCost = (loanSize * yearlyPaymentsPercentage) / 12;
    //The monthly cost of running the house
    let monthlyRunningCost = parseInt(this.state.yearlyRunningCost) / 12;
    //The monthly costs added up!
    let monthCost =
      monthlyInterestPayments + monthlyPaymentsCost + monthlyRunningCost;
    await this.setState({
      sum: monthCost.toFixed()
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
            maxValue={"11000000"}
            stepSize={"5000"}
            defaultValue={"2500000"}
            handleChange={this.handleChange}
          />

          <span>{this.state.slutpris} SEK</span>
          <br />
          <br />

          {/*Kontantinsats */}
          <Slider
            sliderLabel={"Kontantinsats (%):"}
            name={"cashDepositPercentage"}
            minValue={"15"}
            maxValue={"100"}
            stepSize={"1"}
            defaultValue={"15"}
            handleChange={this.handleChange}
          />
          <span>{this.state.cashDepositPercentage}%</span>
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
          <span>{this.state.interestRate}%</span>
          <br />
          <br />

          {/*Ammortering */}
          <Slider
            sliderLabel={"Ammortering (%/år):"}
            name={"yearlyPaymentsPercentage"}
            minValue={"0"}
            maxValue={"5"}
            stepSize={".1"}
            defaultValue={"2"}
            handleChange={this.handleChange}
          />
          <span>{this.state.yearlyPaymentsPercentage}</span>
          <br />
          <br />

          {/*Driftskostnad */}
          <Slider
            sliderLabel={"Driftskostnad (SEK/år):"}
            name={"yearlyRunningCost"}
            minValue={"10000"}
            maxValue={"100000"}
            stepSize={"500"}
            defaultValue={"50000"}
            handleChange={this.handleChange}
          />
          <span>{this.state.yearlyRunningCost}</span>
          <br />
          <br />

          <span>Månadskostnad: {this.state.sum}</span>
        </div>
      </form>
    );
  }
}

export default HouseForm;
