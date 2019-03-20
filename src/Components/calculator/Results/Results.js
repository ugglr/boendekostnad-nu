import React from "react";

const Results = props => {
  return (
    <section className="content-section bg-primary text-white">
      <div className="container text-center">
        <h2>Resultat: {props.totalResult}</h2>
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
        <p>Eget ägande av bostaden: {props.loanLeft}</p>
        <p>Antal år kvar vid nuvarande ammorteringsgrad: {props.yearsLeft}</p>
        <h3>Lånebild: {props.loanSize}</h3>
        <hr />
        <p>Kontantinsats: </p>
        <p>Lagfart: </p>
        <p>Pantbrev: </p>
        <h3>Kontanter vid inköp: {props.cashOnHand}</h3>
      </div>
    </section>
  );
};

export default Results;
