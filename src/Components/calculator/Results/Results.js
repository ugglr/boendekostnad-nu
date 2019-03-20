import React from "react";

const Results = props => {
  if (props.resFormat === "AptCalculator") {
    return (
      <section className="content-section bg-primary text-white">
        <div className="container text-center">
          <h1>Resultat: {props.totalResult} SEK</h1>
          <hr />
          <p>Ränta/månad: {props.monthlyInterestPayments} SEK</p>
          <p>Ammortering/månad: {props.monthlyPayments} SEK</p>
          <p>Driftskostnader/månad: {props.monthlyRunningCost} SEK</p>
          <h4 className="mb-4">
            Fast Boendekostnad/månad: {props.monthCost} SEK
          </h4>
          <hr />
          <p>Transportkostnader: {props.monthlyTransportCosts}</p>
          <p>Matkostnader: {props.monthlyFoodCosts}</p>
          <p>Försäkringskostnader: {props.monthlyInsuranceCost}</p>
          <p>Renoveringsfond: {props.monthlyRenoFundCost}</p>
          <p>Övrigt: {props.monthlyOtherCost}</p>
          <h4 className="mb-4">
            Summa Övriga Månadskostnader: {props.sumOtherCosts}
          </h4>
          <hr />
          <p>Eget ägande av bostaden: {props.loanPercentageLeft}%</p>
          <p>Antal år kvar vid nuvarande ammorteringsgrad: {props.yearsLeft}</p>
          <h4>Lånebild: {props.loanSize} SEK</h4>
          <hr />
          <p>Kontantinsats: {props.cashDeposit} SEK</p>
          <p>Lagfart: {props.lagfart} SEK</p>
          <p>Pantbrev: {props.pantbrev}</p>
          <h4>Kontanter vid inköp: {props.cashOnHand} SEK</h4>
        </div>
      </section>
    );
  } else {
    return (
      <section className="content-section bg-primary text-white">
        <div className="container text-center">
          <h1>Resultat: {props.totalResult} SEK</h1>
          <hr />
          <p>Ränta/månad: {props.monthlyInterestPayments} SEK</p>
          <p>Ammortering/månad: {props.monthlyPayments} SEK</p>
          <p>Driftskostnader/månad: {props.monthlyRunningCost} SEK</p>
          <h4 className="mb-4">
            Fast Boendekostnad/månad: {props.monthCost} SEK
          </h4>
          <hr />
          <p>Transportkostnader: {props.monthlyTransportCosts}</p>
          <p>Matkostnader: {props.monthlyFoodCosts}</p>
          <p>Försäkringskostnader: {props.monthlyInsuranceCost}</p>
          <p>Renoveringsfond: {props.monthlyRenoFundCost}</p>
          <p>Övrigt: {props.monthlyOtherCost}</p>
          <h4 className="mb-4">
            Summa Övriga Månadskostnader: {props.sumOtherCosts}
          </h4>
          <hr />
          <p>Eget ägande av bostaden: {props.loanPercentageLeft}%</p>
          <p>Antal år kvar vid nuvarande ammorteringsgrad: {props.yearsLeft}</p>
          <h4>Lånebild: {props.loanSize} SEK</h4>
          <hr />
          <p>Kontantinsats: {props.cashDeposit} SEK</p>
          <p>Lagfart: {props.lagfart} SEK</p>
          <p>Pantbrev: {props.pantbrev}</p>
          <h4>Kontanter vid inköp: {props.cashOnHand} SEK</h4>
        </div>
      </section>
    );
  }
};

export default Results;
