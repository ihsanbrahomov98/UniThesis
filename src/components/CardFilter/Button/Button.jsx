import React from "react";
import "./button.css";

const Button = ({ text, containerDisabled }) => {
  return (
    <>
      <div className={containerDisabled ? "" : "container"}>
        <div className="d-flex justify-content-center mt-3 pe-3 ps-3 py-2 CardFilterButton ">
          {text}
        </div>
      </div>
    </>
  );
};

export default Button;
