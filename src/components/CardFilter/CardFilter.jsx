import React from "react";
import Header from "./Header/Header";
import "./cardFilter.css";
import Button from "./Button/Button";
import Item from "./Item/Item";
const CardFilter = ({ isHeaderHidden }) => {
  return (
    <>
      <div className={isHeaderHidden ? "" : "mt-1"}>
        {" "}
        <div
          className={`container h-50 CardFilter  border  p-4  ${
            isHeaderHidden ? "" : "mt-5 CardFilterMargin"
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
