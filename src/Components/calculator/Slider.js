import React from "react";

const Slider = props => {
  return (
    <React.Fragment>
      <label>{props.sliderLabel}</label>
      <input
        className="slider"
        type="range"
        name={props.name}
        min={props.minValue}
        max={props.maxValue}
        step={props.stepSize}
        defaultValue={props.defaultValue}
        onChange={props.handleChange}
      />
    </React.Fragment>
  );
};

export default Slider;
