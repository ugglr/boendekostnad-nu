import React, { Component } from "react";

import Switch from "@material-ui/core/Switch";

import HouseForm from "./HouseForm";
import AptForm from "../aptCalculator/AptForm";
import Results from "../Results/Results";

import "./calculator.css";

class HouseCalculator extends Component {
  state = {
    toggle: false,
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
        {this.state.toggle || (
          <HouseForm
            handleChange={this.handleChange}
            updateSum={this.updateSum}
            slutpris={this.state.slutpris}
            cashDepositPercentage={this.state.cashDepositPercentage}
            interestRate={this.state.interestRate}
            yearlyPaymentsPercentage={this.state.yearlyPaymentsPercentage}
            yearlyRunningCost={this.state.yearlyRunningCost}
          />
        )}
        <Results monthCost={this.state.sum} />
      </React.Fragment>
    );
  }
}

export default HouseCalculator;
