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
            <Item
              number={"1"}
              text={"Регистрай се в нашето приложение"}
              title={"Регистрай се"}
            />
            <Item number={"2"} text={"Поплъни полетата"} title={"Поплъни"} />
            <Item
              number={"3"}
              text={"Избери подходящ гледач за теб"}
              title={"Избери  гледач"}
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="d-flex justify-content-start align-items-start">
            <Label text={"Защо да избереш нас"} />
            <Label />
            <Label />
          </div>
          <div className="d-flex justify-content-start align-items-start ">
            <Item
              number={"1"}
              text={"Никой не се грижа така за домашните любимци както ние"}
              title={"Специална грижа за вашето куче"}
            />
            <Item
              number={"2"}
              text={"Пълна застраховка покриваща всички непредвидени ситуации"}
              title={"Застраховка"}
            />
            <Item
              number={"3"}
              text={"Хиляди доволни клиенти и щастилви домашни любимци"}
              title={"Дългогодишен опит"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppOverview;
