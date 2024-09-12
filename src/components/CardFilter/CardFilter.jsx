import React from "react";
import Header from "./Header/Header";
import "./cardFilter.css";
import Button from "./Button/Button";
import Item from "./Item/Item";
const CardFilter = ({ isHeaderHidden }) => {
  return (
    <>
      <div className={isHeaderHidden ? "" : ""}>
        {" "}
        <div
          className={`container d-flex justify-content-center align-items-center  CardFilter  border  p-4  ${
            isHeaderHidden ? "" : " CardFilterMargin"
          } `}
        >
          {isHeaderHidden ? "" : <Header />}
          <Item />
          {/* <Button text={"търси"} /> */}
        </div>
      </div>
    </>
  );
};

export default CardFilter;
