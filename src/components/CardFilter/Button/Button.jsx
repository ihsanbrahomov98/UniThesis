import React from "react";
import "./button.css";

const Button = ({ text }) => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center mt-3 pe-3 ps-3 py-2 CardFilterButton ">
          {text}
        </div>
      </div>
    </>
  );
};

export default Button;
