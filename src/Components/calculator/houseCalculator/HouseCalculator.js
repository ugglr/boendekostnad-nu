import React, { Component } from "react";

//Local component import
import HouseForm from "./HouseForm";
import Results from "../Results/Results";

import "../calculator.css";

class HouseCalculator extends Component {
  state = {
    //--------Fixed monthly living costs-----------
    slutpris: 2500000,
    cashDepositPercentage: 15,
    interestRate: 2,
    monthlyInterestPayments: 3542,
    yearlyPaymentsPercentage: 2,
    monthlyPayments: 3542,
    yearlyRunningCost: 50000,
    monthlyRunningCost: 4167,
    sum: 11251,
    //----------Other living costs--------------
    //Other
    transportToggle: false,
    monthlyTransportCosts: 0,
    //Food
    foodToggle: false,
    monthlyFoodCosts: 0,
    //insurace
    insuranceToggle: false,
    monthlyInsuranceCost: 0,
    //Renovation fund
    renoFundToggle: false,
    monthlyRenoFundCost: 0,
    //Other
    otherToggle: false,
    monthlyOtherCost: 0,
    sumOtherCosts: 0,
    totalResult: 11251,
    //----------------Loan Stats--------------
    loanPercentageLeft: 85,
    yearsLeft: 42.5
  };

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    this.updateSum();
    this.sumOtherCosts();
  };

  handleToggle = async e => {
    await this.setState({ [e.target.name]: e.target.checked });
    this.ifFalseReset();
  };

  ifFalseReset = () => {
    if (this.state.transportToggle === false) {
      this.setState({ monthlyTransportCosts: 0 });
    } else if (this.state.foodToggle === false) {
      this.setState({ monthlyFoodCosts: 0 });
    } else if (this.state.insuranceToggle === false) {
      this.setState({ monthlyInsuranceCost: 0 });
    } else if (this.state.renoFundToggle === false) {
      this.setState({ monthlyRenoFundCost: 0 });
    } else if (this.state.otherToggle === false) {
      this.setState({ monthlyOtherCost: 0 });
    }
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
    this.setState({
      monthlyInterestPayments: monthlyInterestPayments.toFixed()
    });
    //The percentage of the loan being payed off every year
    let yearlyPaymentsPercentage =
      parseFloat(this.state.yearlyPaymentsPercentage) / 100;
    //The amount being payed off towards the loan each month in
    let monthlyPaymentsCost = (loanSize * yearlyPaymentsPercentage) / 12;
    this.setState({ monthlyPayments: monthlyPaymentsCost.toFixed() });
    //The monthly cost of running the house
    let monthlyRunningCost = parseInt(this.state.yearlyRunningCost) / 12;
    //The monthly costs added up!
    let monthCost =
      monthlyInterestPayments + monthlyPaymentsCost + monthlyRunningCost;
    await this.setState({
      sum: monthCost.toFixed()
    });
  };

  sumOtherCosts = () => {
    let monthlyTransportCosts = parseInt(this.state.monthlyTransportCosts);
    let monthlyFoodCosts = parseInt(this.state.monthlyFoodCosts);
    let monthlyInsuranceCost = parseInt(this.state.monthlyInsuranceCost);
    let monthlyRenoFundCost = parseInt(this.state.monthlyRenoFundCost);
    let monthlyOtherCost = parseInt(this.state.monthlyOtherCost);

    this.setState({
      sumOtherCosts:
        monthlyTransportCosts +
        monthlyFoodCosts +
        monthlyInsuranceCost +
        monthlyRenoFundCost +
        monthlyOtherCost,
      totalResult: this.state.sum + this.state.sumOtherCosts
    });
    let sum = parseInt(this.state.sum);
    let sumOtherCosts = parseInt(this.state.sumOtherCosts);
    this.setState({
      totalResult: sum + sumOtherCosts
    });
  };

  calcLoanStats = () => {
    let percentageLeft = 100 - parseInt(this.state.cashDepositPercentage);
    let yearsLeft = percentageLeft / this.state.yearlyPaymentsPercentage;

    this.setState({
      loanPercentageLeft: percentageLeft,
      yearsLeft: yearsLeft
    });
  };

  render() {
    return (
      <React.Fragment>
        <HouseForm
          handleChange={this.handleChange}
          handleToggle={this.handleToggle}
          updateSum={this.updateSum}
          slutpris={this.state.slutpris}
          cashDepositPercentage={this.state.cashDepositPercentage}
          interestRate={this.state.interestRate}
          yearlyPaymentsPercentage={this.state.yearlyPaymentsPercentage}
          yearlyRunningCost={this.state.yearlyRunningCost}
          monthlyTransportCosts={this.state.monthlyTransportCosts}
          monthlyFoodCosts={this.state.monthlyFoodCosts}
          monthlyInsuranceCost={this.state.monthlyInsuranceCost}
          monthlyRenoFundCost={this.state.monthlyRenoFundCost}
          monthlyOtherCost={this.state.monthlyOtherCost}
          sumOtherCosts={this.state.sumOtherCosts}
          loanLeft={this.state.loanPercentageLeft}
          yearsLeft={this.state.yearsLeft}
          transportToggle={this.state.transportToggle}
          foodToggle={this.state.foodToggle}
          insuranceToggle={this.state.insuranceToggle}
          renoFundToggle={this.state.renoFundToggle}
          otherToggle={this.state.otherToggle}
        />
        <Results
          monthCost={this.state.sum}
          monthlyInterestPayments={this.state.monthlyInterestPayments}
          monthlyRunningCost={this.state.monthlyRunningCost}
          monthlyPayments={this.state.monthlyPayments}
          monthlyTransportCosts={this.state.monthlyTransportCosts}
          monthlyFoodCosts={this.state.monthlyFoodCosts}
          monthlyInsuranceCost={this.state.monthlyInsuranceCost}
          monthlyRenoFundCost={this.state.monthlyRenoFundCost}
          monthlyOtherCost={this.state.monthlyOtherCost}
          sumOtherCosts={this.state.sumOtherCosts}
          totalResult={this.state.totalResult}
        />
      </React.Fragment>
    );
  }
}

export default HouseCalculator;
