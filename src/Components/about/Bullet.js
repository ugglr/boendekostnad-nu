import React from "react";

import "../../vendor/simple-line-icons/css/simple-line-icons.css";

export const Bullet = props => {
  return (
    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
      <span class="service-icon rounded-circle mx-auto mb-3">
        {props.iconPick === 1 ? (
          <i class="icon-screen-smartphone" />
        ) : props.iconPick === 2 ? (
          <i class="icon-pencil" />
        ) : props.iconPick === 3 ? (
          <i class="icon-like" />
        ) : (
          <i class="icon-mustache" />
        )}
      </span>
      <h4>
        <strong>{props.label}</strong>
      </h4>
      <p class="text-faded mb-0">{props.text}</p>
    </div>
  );
};

export default Bullet;
