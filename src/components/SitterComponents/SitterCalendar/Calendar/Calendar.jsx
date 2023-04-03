import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Button from "./../../../CardFilter/Button/Button";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          excludeDates={[
            addDays(new Date(), 1),
            addDays(new Date(), 5),
            addDays(new Date(), 2),
            addDays(new Date(), 4),
          ]}
          selectsRange
          selectsDisabledDaysInRange
          inline
        />
      </div>
      <div className="d-flex justify-content-center ">
        <div className="d-flex justify-content-center mt-2">
          <div className="d-flex">
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
        <div className="d-flex justify-content-center">
          <div className={"container"}>
            <div className="d-flex justify-content-center mt-1 pe-3 ps-3 py-2 ms-2 CardFilterButton ">
              {"поръчай"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
