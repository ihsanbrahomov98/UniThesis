import React from "react";
import Header from "./Header/Header";
import "./cardFilter.css";
import Body from "./Body/Body";
import Button from "./Button/Button";
const CardFilter = ({ isHeaderHidden }) => {
  return (
    <>
      <div className="mt-1">
        {" "}
        <div className="container h-50 CardFilter border p-4 mt-5">
          {isHeaderHidden ? "" : <Header />}
          <Body />
          <Button />
        </div>
      </div>
    </>
  );
};

export default CardFilter;
