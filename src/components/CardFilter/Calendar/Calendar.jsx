import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
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
  );
};

export default Calendar;
