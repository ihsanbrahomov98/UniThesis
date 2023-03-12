import React from "react";
import Item from "../Item/Item";

const Body = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="">
          <Item />
        </div>
        <div className="">
          <Item />
        </div>
        <div className="">
          <Item />
        </div>
      </div>
    </>
  );
};

export default Body;
