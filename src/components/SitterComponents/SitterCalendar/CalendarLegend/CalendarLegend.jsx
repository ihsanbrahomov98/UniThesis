import React from "react";
import "./calendarLegends.css";
import Button from "./../../../CardFilter/Button/Button";

const CalendarLegend = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-2">
        <div className="d-flex  w-50">
          <div className="d-flex">
            <div className="SitterCalendarLegendsBoxAvailable ms-3"></div>
            <div className="ms-2">Свободни дни</div>
          </div>
          <div className="d-flex">
            <div className="SitterCalendarLegendsBoxSelected ms-3"></div>
            <div className="ms-2">Избрани от вас дни</div>
          </div>{" "}
          <div className="d-flex">
            <div className="SitterCalendarLegendsBoxUnAvailable ms-3"></div>
            <div className="ms-2">Заети дни</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarLegend;
