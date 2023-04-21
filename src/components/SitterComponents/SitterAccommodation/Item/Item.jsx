import React from "react";
import { HouseDoorFill } from "react-bootstrap-icons";

const Item = ({ title, text, price, image }) => {
  return (
    <>
      <div className="d-flex justify-content-between border p-2">
        <div className="d-flex">
          <div className="me-2 d-flex align-items-center">
            <img className="" src={image} alt="Snow" />
          </div>
          <div className="">
            <div className="">{title}</div>
            <div className="fw-lighter">{text}</div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div className="fw-bold">{price} лв</div>
          <div className="">/ Час</div>
        </div>
      </div>
    </>
  );
};

export default Item;
