import React from "react";
//External Libraries Import
import Switch from "@material-ui/core/Switch";

//Local Component Import
import Slider from "../Slider";

const AptForm = props => {
  return (
    <form>
      <div className="slide__container">
        <h3>Bostadsrätter</h3>
        <hr />
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
        <hr />
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
        <hr />
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
        <hr />
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
        <span>{props.yearlyPaymentsPercentage}%</span>
        <hr />
        {/*Driftskostnad */}
        <Slider
          sliderLabel={"Avgift/månad:"}
          name={"monthlyFee"}
          minValue={"1000"}
          maxValue={"15000"}
          stepSize={"50"}
          defaultValue={"4500"}
          handleChange={props.handleChange}
        />
        <span>{props.monthlyFee} SEK</span>
        <hr />
        {/*Transport costs */}
        <Switch
          name={"transportToggle"}
          checked={props.transportToggle}
          onChange={props.handleToggle}
          color="default"
          style={{ color: "#1d809f" }}
        />
        Transportkostnader/månad:
        {props.transportToggle && (
          <React.Fragment>
            <Slider
              sliderLabel={""}
              name={"monthlyTransportCosts"}
              minValue={"0"}
              maxValue={"10000"}
              stepSize={"100"}
              defaultValue={"0"}
              handleChange={props.handleChange}
            />
            <span>{props.monthlyTransportCosts}</span>
          </React.Fragment>
        )}
        <hr />
        {/*Food costs */}
        <Switch
          name={"foodToggle"}
          checked={props.foodToggle}
          onChange={props.handleToggle}
          color="default"
          style={{ color: "#1d809f" }}
        />
        Matkostnader/månad:
        {props.foodToggle && (
          <React.Fragment>
            <Slider
              sliderLabel={""}
              name={"monthlyFoodCosts"}
              minValue={"0"}
              maxValue={"10000"}
              stepSize={"100"}
              defaultValue={"0"}
              handleChange={props.handleChange}
            />
            <span>{props.monthlyFoodCosts}</span>
          </React.Fragment>
        )}
        <hr />
        {/*Insurance costs */}
        <Switch
          name={"insuranceToggle"}
          checked={props.insuranceToggle}
          onChange={props.handleToggle}
          color="default"
          style={{ color: "#1d809f" }}
        />
        Försäkringskostnader/månad:
        {props.insuranceToggle && (
          <React.Fragment>
            <Slider
              sliderLabel={""}
              name={"monthlyInsuranceCost"}
              minValue={"0"}
              maxValue={"10000"}
              stepSize={"100"}
              defaultValue={"0"}
              handleChange={props.handleChange}
            />
            <span>{props.monthlyInsuranceCost}</span>
          </React.Fragment>
        )}
        <hr />
        {/*Renovation fund costs */}
        <Switch
          name={"renoFundToggle"}
          checked={props.renoFundToggle}
          onChange={props.handleToggle}
          color="default"
          style={{ color: "#1d809f" }}
        />
        Renoveringsfond/månad:
        {props.renoFundToggle && (
          <React.Fragment>
            <Slider
              sliderLabel={""}
              name={"monthlyRenoFundCost"}
              minValue={"0"}
              maxValue={"10000"}
              stepSize={"100"}
              defaultValue={"0"}
              handleChange={props.handleChange}
            />
            <span>{props.monthlyRenoFundCost}</span>
          </React.Fragment>
        )}
        <hr />
        {/*Other monthly costs */}
        <Switch
          name={"otherToggle"}
          checked={props.otherToggle}
          onChange={props.handleToggle}
          color="default"
          style={{ color: "#1d809f" }}
        />
        Övriga månadskostnader:
        {props.otherToggle && (
          <React.Fragment>
            <Slider
              sliderLabel={""}
              name={"monthlyOtherCost"}
              minValue={"0"}
              maxValue={"10000"}
              stepSize={"100"}
              defaultValue={"0"}
              handleChange={props.handleChange}
            />
            <span>{props.monthlyOtherCost}</span>
          </React.Fragment>
        )}
        <hr />
        <br />
      </div>
    </form>
  );
};

export default AptForm;
