import React from "react";

import "../../vendor/simple-line-icons/css/simple-line-icons.css";

export const Bullet = props => {
  return (
    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
      <span className="service-icon rounded-circle mx-auto mb-3">
        {props.iconPick === 1 ? (
          <i className="icon-screen-smartphone" />
        ) : props.iconPick === 2 ? (
          <i className="icon-pencil" />
        ) : props.iconPick === 3 ? (
          <i className="icon-like" />
        ) : (
          <i className="icon-mustache" />
        )}
      </span>
      <h4>
        <strong>{props.label}</strong>
      </h4>
      <p className="text-faded mb-0">{props.text}</p>
    </div>
  );
};

export default Bullet;
