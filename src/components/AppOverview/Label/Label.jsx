import React from "react";

const Label = ({ text }) => {
  return (
    <div className="container fw-bold fs-5 mb-2 d-flex justify-content-center align-items-center me-5">
      {text}
    </div>
  );
};

export default Label;
