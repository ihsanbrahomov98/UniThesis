import React from "react";
import { HouseDoorFill } from "react-bootstrap-icons";

const Item = () => {
  return (
    <>
      <div className="d-flex justify-content-between border p-2">
        <div className="d-flex">
          <div className="me-2 d-flex align-items-center">
            <HouseDoorFill />
          </div>
          <div className="">
            <div className="">Разхождане на куче</div>
            <div className="fw-lighter">
              кучето ще бъде разходено за 45 минути
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div className="fw-bold">20 лв</div>
          <div className="">Час</div>
        </div>
      </div>
    </>
  );
};

export default Item;
