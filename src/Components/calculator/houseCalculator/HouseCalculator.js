import React, { Component } from "react";

import { Container } from "react-bootstrap";

//Local component import
import HouseForm from "./HouseForm";
import Results from "../Results/Results";

import "../calculator.css";

class HouseCalculator extends Component {
  state = {
    //--------Fixed monthly living costs-----------
    slutpris: 2500000,
    cashDepositPercentage: 15,
    cashDeposit: 375000,
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
    //----------------Loan Stats-------------------------
    loanPercentageLeft: 85,
    yearsLeft: 42.5,
    loanSize: 2125000,
    //-----------Other fees when buying a House----------
    lagfart: 38325,
    pantbrevToggle: false,
    nuvarandePantbrev: 0,
    pantbrev: 50000,
    //--------------Cash Needed on hand at purchase------
    cashOnHand: 463325
  };

  //This updates the states when the sliders are moved
  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    this.updateSum();
    this.sumOtherCosts();
    this.calcLoanStats();
  };

  //This handels the toggles from inside the HouseForm
  handleToggle = async e => {
    await this.setState({ [e.target.name]: e.target.checked });
    this.ifFalseReset();
  };

  //When somone toggles off the optional
  //category we need to reset the value
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
    } else if (this.state.pantbrevToggle === false) {
      this.setState({ pantbrev: 0 });
    }
  };

  //This function updates the values of the fixed costs
  updateSum = async () => {
    //Price of House
    let slutpris = parseInt(this.state.slutpris);
    //Percentage of final price up front
    let cashDepositPercentage =
      parseInt(this.state.cashDepositPercentage) / 100;
    //The size of the loan
    let loanSize = slutpris - slutpris * cashDepositPercentage;
    await this.setState({ loanSize: loanSize });
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

  //This function sums all the optional monthly costs
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
        monthlyOtherCost
    });
    let sum = parseInt(this.state.sum);
    let sumOtherCosts = parseInt(this.state.sumOtherCosts);
    this.setState({
      totalResult: sum + sumOtherCosts
    });
  };

  //This is calculating the status of the loan required
  calcLoanStats = () => {
    let slutPris = parseInt(this.state.slutpris);
    let cashDepositPercentage = parseFloat(this.state.cashDepositPercentage);
    let percentageLeft = 100 - cashDepositPercentage;
    let yearlyPaymentsPercentage = parseFloat(
      this.state.yearlyPaymentsPercentage
    );
    let yearsLeft = (percentageLeft / yearlyPaymentsPercentage).toFixed(2);
    let cashDeposit = slutPris * (cashDepositPercentage / 100);
    let lagfart = slutPris * 0.015 + 825;
    let pantbrev = (slutPris - parseInt(this.state.nuvarandePantbrev)) * 0.02;
    let cashOnHand = pantbrev + lagfart + cashDeposit;
    this.setState({
      loanPercentageLeft: percentageLeft,
      yearsLeft: yearsLeft,
      cashDeposit: cashDeposit,
      lagfart: lagfart,
      pantbrev: pantbrev,
      cashOnHand: cashOnHand
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid>
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
            pantbrevToggle={this.state.pantbrevToggle}
            nuvarandePantbrev={this.state.nuvarandePantbrev}
          />
        </Container>
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
          loanPercentageLeft={this.state.loanPercentageLeft}
          yearsLeft={this.state.yearsLeft}
          loanSize={this.state.loanSize}
          cashDeposit={this.state.cashDeposit}
          lagfart={this.state.lagfart}
          nuvarandePantbrev={this.state.nuvarandePantbrev}
          pantbrev={this.state.pantbrev}
          cashOnHand={this.state.cashOnHand}
        />
      </React.Fragment>
    );
  }
}

export default HouseCalculator;
