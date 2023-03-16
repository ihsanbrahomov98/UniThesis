import React from "react";
import "./calendarLegends.css";

const CalendarLegend = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex  w-50">
          <div className="d-flex">
            <div className="SitterCalendarLegendsBoxAvailable"></div>
            <div className="">Свободни дни</div>
          </div>
          <div className="d-flex">
            <div className="SitterCalendarLegendsBoxAvailable"></div>
            <div className="">Свободни дни</div>
          </div>{" "}
          <div className="d-flex">
            <div className="SitterCalendarLegendsBoxAvailable"></div>
            <div className="">Свободни дни</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarLegend;
