import React from "react";
import Item from "./Item/Item";
import Label from "./Label/Label";

const AppOverview = () => {
  return (
    <>
      <div className="container mt-2">
        <div>
          <div className="d-flex justify-content-center align-items-center">
            <Label text={"Label"} />
            <Label />
            <Label />
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <Item number={"1"} text={"text"} title={"title"} />
            <Item number={"1"} text={"text"} title={"title"} />
            <Item number={"1"} text={"text"} title={"title"} />
          </div>
        </div>

        <div className="mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <Label text={"Label"} />
            <Label />
            <Label />
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <Item number={"1"} text={"text"} title={"title"} />
            <Item number={"1"} text={"text"} title={"title"} />
            <Item number={"1"} text={"text"} title={"title"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppOverview;
