import React from "react";

const Label = ({ text }) => {
  return (
    <div className="container fw-bold fs-5 mb-3 d-flex justify-content-start align-items-start me-5">
      {text}
    </div>
  );
};

export default Label;
