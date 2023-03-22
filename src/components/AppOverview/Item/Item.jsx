import React from "react";
import "./item.css";

const Item = ({ number, text, title }) => {
  return (
    <>
      <div className="container d-flex justify-content-start align-items-start">
        <div className="d-flex justify-content-start align-items-start me-3">
          <div className="d-flex justify-content-center align-items-center AppOverviewItem">
            {number}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <div className="fw-bold fs-5">{title}</div>
          <div>{text}</div>
        </div>
      </div>
    </>
  );
};

export default Item;
