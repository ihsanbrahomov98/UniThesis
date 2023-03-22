import React from "react";
import Item from "./Item/Item";
import Label from "./Label/Label";

const AppOverview = () => {
  return (
    <>
      <div className="container mt-5">
        <div>
          <div className="d-flex justify-content-start align-items-start  ">
            <Label text={"Как рабити нашето приложение"} />
            <Label />
            <Label />
          </div>
          <div className="d-flex justify-content-start align-items-start  ">
            <Item number={"1"} text={"Поплъни полетата"} title={"Поплъни"} />
            <Item number={"2"} text={"Поплъни полетата"} title={"Поплъни"} />
            <Item number={"3"} text={"Поплъни полетата"} title={"Поплъни"} />
          </div>
        </div>

        <div className="mt-4">
          <div className="d-flex justify-content-start align-items-start">
            <Label text={"Защо да избереш нас"} />
            <Label />
            <Label />
          </div>
          <div className="d-flex justify-content-start align-items-start ">
            <Item number={"1"} text={"Поплъни полетата"} title={"Поплъни"} />
            <Item number={"2"} text={"Поплъни полетата"} title={"Поплъни"} />
            <Item number={"3"} text={"Поплъни полетата"} title={"Поплъни"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppOverview;
