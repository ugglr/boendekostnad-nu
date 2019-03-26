import React from "react";
import { Container } from "react-bootstrap";

const Results = props => {
  if (props.resFormat === "AptCalculator") {
    return (
      <React.Fragment>
        <Container
          fluid
          style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
          className="bg-primary text-white text-center"
        >
          <div style={boxStyles}>
            <h2 style={{ borderBottom: "solid", borderWidth: "5px" }}>
              Resultat: {props.totalResult} SEK
            </h2>
          </div>
          <p>Ränta/månad: {props.monthlyInterestPayments} SEK</p>
          <p>Ammortering/månad: {props.monthlyPayments} SEK</p>
          <p>Avgift/månad: {props.monthlyFee} SEK</p>
          <div style={boxStyles}>
            <h4 className="mb-4" style={boxBorder}>
              Fast Boendekostnad/månad: {props.monthCost} SEK
            </h4>
          </div>
          <p>Transportkostnader/månad: {props.monthlyTransportCosts} SEK</p>
          <p>Matkostnader/månad: {props.monthlyFoodCosts} SEK</p>
          <p>Försäkringskostnader/månad: {props.monthlyInsuranceCost} SEK</p>
          <p>Renoveringsfond/månad: {props.monthlyRenoFundCost} SEK</p>
          <p>Övrigt/månad: {props.monthlyOtherCost} SEK</p>
          <div style={boxStyles}>
            <h4 className="mb-4" style={boxBorder}>
              Summa Övriga Månadskostnader: {props.sumOtherCosts} SEK
            </h4>
          </div>
          <p>Eget ägande av bostaden: {props.loanPercentageLeft}%</p>
          <p>Antal år kvar med ammorteringsgrad: {props.yearsLeft} år</p>
          <div style={boxStyles}>
            <h4 style={boxBorder}>Lånebild: {props.loanSize} SEK</h4>
          </div>
          <div style={boxStyles}>
            <h4 style={boxBorder}>Kontantinsats: {props.cashDeposit} SEK</h4>
          </div>
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Container
          style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
          fluid
          className="bg-primary text-white text-center"
        >
          <div style={boxStyles}>
            <h2
              style={{
                borderBottom: "solid",
                borderWidth: "5px"
              }}
            >
              Resultat/månad: {props.totalResult} SEK
            </h2>
          </div>
          <p>Ränta/månad: {props.monthlyInterestPayments} SEK</p>
          <p>Ammortering/månad: {props.monthlyPayments} SEK</p>
          <p>Driftskostnader/månad: {props.monthlyRunningCost} SEK</p>
          <div style={boxStyles}>
            <h4 className="mb-4" style={boxBorder}>
              Fast Boendekostnad/månad: {props.monthCost} SEK
            </h4>
          </div>
          <p>Transportkostnader/månad: {props.monthlyTransportCosts} SEK</p>
          <p>Matkostnader/månad: {props.monthlyFoodCosts} SEK</p>
          <p>Försäkringskostnader/månad: {props.monthlyInsuranceCost} SEK</p>
          <p>Renoveringsfond/månad: {props.monthlyRenoFundCost} SEK</p>
          <p>Övrigt/månad: {props.monthlyOtherCost} SEK</p>
          <div style={boxStyles}>
            <h4 className="mb-4" style={boxBorder}>
              Summa Övriga Månadskostnader: {props.sumOtherCosts} SEK
            </h4>
          </div>
          <p>Eget ägande av bostaden: {props.loanPercentageLeft}%</p>
          <p>
            Antal år kvar vid nuvarande ammorteringsgrad: {props.yearsLeft}
            År
          </p>
          <div style={boxStyles}>
            <h4 style={boxBorder}>Lånebild: {props.loanSize} SEK</h4>
          </div>
          <p>Kontantinsats: {props.cashDeposit} SEK</p>
          <p>Lagfart: {props.lagfart} SEK</p>
          <p>Pantbrev: {props.pantbrev}</p>
          <div style={boxStyles}>
            <h4 style={boxBorder}>
              Kontanter vid inköp: {props.cashOnHand} SEK
            </h4>
          </div>
        </Container>
      </React.Fragment>
    );
  }
};

var boxStyles = {
  marginLeft: "10%",
  width: "80%"
};

var boxBorder = {
  borderStyle: "solid",
  padding: "5px",
  borderColor: "#fff",
  borderWidth: "3px"
};

export default Results;
