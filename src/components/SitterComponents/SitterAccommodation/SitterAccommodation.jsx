import React from "react";
import { HouseDoorFill } from "react-bootstrap-icons";
import Item from "./Item/Item";

const SitterAccommodation = () => {
  return (
    <>
      <div className="container d-flex w-75 mt-5 flex-column">
        <div className="fs-4 fw-bold">Услугите на Ихсан</div>
        <div className="fs-5 ">Във вашият дом</div>
        <Item />
        <Item />
        <div className="fs-5 mt-1 ">Във дома на гледача</div>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
};

export default SitterAccommodation;
