import React from "react";

//Local Component Import
import Slider from "../Slider";

const AptForm = props => {
  return (
    <form>
      <h1>This is the APT Form</h1>
      <div className="slide__container">
        {/*Slutpris */}
        <Slider
          sliderLabel={"Estimerat Slutpris:"}
          name={"slutpris"}
          minValue={"750000"}
          maxValue={"11000000"}
          stepSize={"5000"}
          defaultValue={"2500000"}
          handleChange={props.handleChange}
        />

        <span>{props.slutpris} SEK</span>
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
          handleChange={props.handleChange}
        />
        <span>{props.cashDepositPercentage}%</span>
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
          handleChange={props.handleChange}
        />
        <span>{props.interestRate}%</span>
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
          handleChange={props.handleChange}
        />
        <span>{props.yearlyPaymentsPercentage}</span>
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
          handleChange={props.handleChange}
        />
        <span>{props.yearlyRunningCost}</span>
        <br />
        <br />
      </div>
    </form>
  );
};

export default AptForm;
