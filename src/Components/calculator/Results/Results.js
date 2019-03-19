import React from "react";

const Results = props => {
  return (
    <section class="content-section bg-primary text-white">
      <div class="container text-center">
        <h2 class="mb-4">Din månadskostnad: {props.monthCost}</h2>
        <h3>a H3 tag</h3>
      </div>
    </section>
  );
};

export default Results;
