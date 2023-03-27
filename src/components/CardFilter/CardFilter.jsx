import React from "react";
import Header from "./Header/Header";
import "./cardFilter.css";
import Button from "./Button/Button";
import Item from "./Item/Item";
const CardFilter = ({ isHeaderHidden }) => {
  return (
    <>
      <div className="mt-1">
        {" "}
        <div className="container h-50 CardFilter border p-4 mt-5">
          {isHeaderHidden ? "" : <Header />}
          <Item />
          {/* <Button text={"търси"} /> */}
        </div>
      </div>
    </>
  );
};

export default CardFilter;
