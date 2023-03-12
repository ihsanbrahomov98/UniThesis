import React from "react";
import "./item.css";

const Item = ({ number, text, title }) => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center me-3">
          <div className="d-flex justify-content-center align-items-center AppOverviewItem">
            {number}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="fw-bold fs-5">{title}</div>
          <div>{text}</div>
        </div>
      </div>
    </>
  );
};

export default Item;
