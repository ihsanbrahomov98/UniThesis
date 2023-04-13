import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Button from "./../../../CardFilter/Button/Button";

const Calendar = ({ item }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  useEffect(() => {
    console.log(item);
  }, []);
  const calculateTakenDates = (takenDates) => {
    console.log(takenDates);
    let arrayOfTakenDate = [];
    let firstTakenDate;
    let lastTakenDate;

    let endDatCasted;
    let dateCasted;
    let firstIndex = takenDates && takenDates.split("|");
    if (firstIndex) {
      for (let index = 1; index < firstIndex.length; index++) {
        firstTakenDate = firstIndex[index].split(";")[0];
        lastTakenDate = firstIndex[index].split(";")[1];

        dateCasted = new Date(firstTakenDate);
        endDatCasted = new Date(lastTakenDate);
        while (dateCasted <= endDatCasted) {
          console.log("date:", dateCasted);
          arrayOfTakenDate.push(new Date(dateCasted));
          dateCasted.setDate(dateCasted.getDate() + 1);
        }
      }
    }

    return arrayOfTakenDate;
  };
  return (
    <>
      <div className="d-flex justify-content-center ">
        <DatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          excludeDates={calculateTakenDates(item.takenDates)}
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
              <div className="SitterCalendarLegendsBoxUnAvailable ms-3"></div>
              <div className="ms-2">Заети дни</div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className={"container"}>
            {/* <div className="d-flex justify-content-center mt-1 pe-3 ps-3 py-2 ms-2 CardFilterButton ">
              {"поръчай"}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
