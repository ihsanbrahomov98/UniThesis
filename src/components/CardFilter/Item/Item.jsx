import React, { useState, useEffect, useCallback } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import bg from "date-fns/locale/bg";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDown } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";
import { Building } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import moment from "moment";
import "moment/locale/bg"; // Import the Bulgarian locale

import { CalendarCheck } from "react-bootstrap-icons";
import {
  WALKING,
  VET_VISITING,
  TRAINING,
  SITTING_AT_YOUR_HOME,
  SITTING_AT_SITTER_HOME,
} from "../../../Enums/OfferedServicesEnum/OfferedServicesEnum";
import "./item.css";
import axios from "axios";
import {
  BACK_END_BASE_URL,
  FRONT_END_BASE_URL,
  SEARCH_URL,
} from "../../../utils/Utils";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSearchParams } from "../../../redux/SearchSlice/SearchSlice";
import { setSitters } from "../../../redux/SitterSlice/SitterSlice";
import { CityArray } from "../../../Enums/CityEnum/CityEnum";
import dogTraining from "../../../assets/Images/dogTraining.png";

const Item = () => {
  registerLocale("bg", bg);
  moment.locale("bg"); // Set the locale to Bulgarian
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedText, setSelectedText] = useState("Избери услуга");
  const [selectedDates, setSelectedDates] = useState("Избери дати");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate23, endDate2] = dateRange;
  const [data, setData] = useState({
    offeredServices: "",
    city: "",
    startingDate: "",
    endingDate: "",
    selectedIcon: "",
    telephone: "",
    name: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectingStartDate, setSelectingStartDate] = useState(true);
  const [dragging, setDragging] = useState(false);

  const handleDateChange = (date) => {
    if (selectingStartDate) {
      setStartDate(date);
      setSelectingStartDate(false);
    } else {
      setEndDate(date);
      setSelectingStartDate(true);
      setShowDatePicker(false); // Optionally close the picker after selecting end date
    }
  };

  const handleMouseDown = useCallback((date) => {
    setDragging(true);
    setStartDate(date);
  }, []);

  const handleMouseUp = useCallback(
    (date) => {
      if (dragging) {
        setEndDate(date);
        setDragging(false);
      }
    },
    [dragging]
  );

  const handleMouseEnter = useCallback(
    (date) => {
      if (dragging && startDate) {
        setEndDate(date);
      }
    },
    [dragging, startDate]
  );

  const handleDateClick = () => {
    setShowDatePicker(!showDatePicker);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchDataRedux = useSelector((state) => state.search);
  const userDataRedux = useSelector((state) => state.user);
  const filterSearchData = (dataInfo, dataType) => {
    setData((prevState) => ({
      ...prevState,
      [dataType]: dataInfo,
    }));
    console.log(data);
  };

  const setIconAndText = (text, icon) => {
    setSelectedIcon(icon);
    filterSearchData(text, "offeredServices");
    filterSearchData(icon, "selectedIcon");
    setSelectedText(text);
  };

  const getSitters = () => {
    if (userDataRedux.email || userDataRedux.username) {
      const { sitters } = axios
        .post(
          BACK_END_BASE_URL + SEARCH_URL + "/all",
          {
            city: data.city,
            startingDate: data.startingDate,
            endingDate: data.endingDate,
            offeredServices: data.offeredServices,
          }
          // `/getAll//${
          //   data.city
          // }/${data.startingDate.toString()}/${data.endingDate.toString()}/${
          //   data.offeredServices
          // }`
        )
        .then((response) => {
          dispatch(setSitters(response.data));
        });
      console.log(sitters);
      dispatch(addSearchParams(data));
      navigate(`/search`);
      dispatch(setSitters(sitters));
      console.log(sitters);
    } else {
      navigate("/register");
    }
  };
  useEffect(() => {
    if (searchDataRedux) {
      setData(searchDataRedux);
    }
  }, [window.location]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center me-3 ms-2 flex-row dropdown">
        <button
          type="button"
          className="d-flex justify-content-between btn border"
          data-bs-toggle="dropdown"
        >
          <div className="d-flex justify-content-center align-items-center flew-row">
            <div className="me-2 ms-2 ">
              {data.selectedIcon ? (
                <img
                  className=""
                  alt="d"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  src={data.selectedIcon}
                />
              ) : (
                "Избери вила"
              )}
            </div>
            <div>{data.offeredServices}</div>
          </div>
          <div className="ms-2">
            <ChevronDown />
          </div>
        </button>

        <ul className="dropdown-menu ">
          <li
            onClick={() =>
              setIconAndText(
                "Вила 1 шеката",
                "https://cdn-icons-png.flaticon.com/512/1018/1018579.png"
              )
            }
          >
            <div className="dropdown-item w-100 d-flex CardFilterItemCursor">
              <img
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="CardFilterItemImage"
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/1018/1018579.png"
              />
              <div className="ms-2">Вила 1 шеката</div>
            </div>
          </li>
          <li
            onClick={() =>
              setIconAndText(
                "Вила 2",
                "https://cdn-icons-png.flaticon.com/512/1018/1018579.png"
              )
            }
          >
            <div className="dropdown-item w-100 d-flex CardFilterItemCursor">
              <img
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="CardFilterItemImage"
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/1018/1018579.png"
              />
              <div className="ms-2">Вила 2</div>
            </div>
          </li>
          <li
            onClick={() =>
              setIconAndText(
                "Вила 3",
                "https://cdn-icons-png.flaticon.com/512/1018/1018579.png"
              )
            }
          >
            <div className="dropdown-item w-100 d-flex CardFilterItemCursor">
              <img
                className="CardFilterItemImage"
                alt=""
                style={{ width: "1.5rem", height: "1.5rem" }}
                src="https://cdn-icons-png.flaticon.com/512/1018/1018579.png"
              />
              <div className="ms-2">Вила 3</div>
            </div>
          </li>
        </ul>
      </div>

      <div
        onClick={() => setToggleCalendar(true)}
        className="d-flex flex-row col-4 position-relative dropdown "
      >
        <button
          type="button"
          className="d-flex justify-content-between btn border w-100"
          data-bs-toggle="dropdown"
        >
          <div className="d-flex">
            <div className="">
              <span className="">
                <span>
                  <span className="pe-2 ps-1 me-2 ms-3">
                    {" "}
                    <CalendarCheck />
                  </span>
                  Изберете дни
                  <span>
                    {data.startingDate && data.startingDate.getDate()}
                  </span>
                  <span>
                    {data.startingDate && data.startingDate.getMonth() + 1}
                  </span>
                  <span>
                    {data.startingDate && data.startingDate.getFullYear()}
                  </span>
                </span>
              </span>
              <span className="">
                {data.endingDate ? (
                  <span>
                    <span>{" - "}</span>
                    <span>{data.endingDate && data.endingDate.getDate()}</span>
                    <span>.</span>
                    <span>
                      {data.endingDate && data.endingDate.getMonth() + 1}
                    </span>
                    <span>.</span>
                    <span>
                      {data.endingDate && data.endingDate.getFullYear()}
                    </span>
                  </span>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className=""></div>
          </div>

          <div>
            <ChevronDown />
          </div>
        </button>
        <span className="position-absolute ">
          {toggleCalendar ? (
            <div className="d-flex justify-content-center mt-4">
              <div className="mt-3">
                <div>
                  {true && (
                    <div>
                      <div
                        onClick={handleDateClick}
                        className="date-picker-trigger"
                      >
                        {startDate && endDate
                          ? `Selected range: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                          : "Click here to select a date range"}
                      </div>
                      {showDatePicker && (
                        <div>
                          <div
                            onClick={handleDateClick}
                            className="date-picker-trigger"
                          >
                            {startDate && endDate
                              ? `Selected range: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                              : "Click here to select a date range"}
                          </div>
                          {showDatePicker && (
                            <div>
                              <div
                                onClick={handleDateClick}
                                className="date-picker-trigger"
                              >
                                {startDate && endDate
                                  ? `Selected range: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                                  : "Click here to select a date range"}
                              </div>
                              {showDatePicker && (
                                <div className="date-picker-container">
                                  <DatePicker
                                    selected={endDate || startDate}
                                    onChange={handleDateChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    inline
                                    locale="bg"
                                    monthsShown={2}
                                    className="custom-datepicker"
                                    onDayMouseDown={(date) =>
                                      handleMouseDown(date)
                                    }
                                    onDayMouseUp={(date) => handleMouseUp(date)}
                                    onDayMouseEnter={(date) =>
                                      handleMouseEnter(date)
                                    }
                                    renderCustomHeader={({
                                      monthDate,
                                      customHeaderCount,
                                      decreaseMonth,
                                      increaseMonth,
                                    }) => (
                                      <div className="custom-header">
                                        <button
                                          aria-label="Previous Month"
                                          className={`react-datepicker__navigation react-datepicker__navigation--previous`}
                                          style={
                                            customHeaderCount === 1
                                              ? { visibility: "hidden" }
                                              : null
                                          }
                                          onClick={decreaseMonth}
                                        >
                                          <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                                            {"<"}
                                          </span>
                                        </button>
                                        <span className="react-datepicker__current-month">
                                          {monthDate.toLocaleString("bg", {
                                            month: "long",
                                            year: "numeric",
                                          })}
                                        </span>
                                        <button
                                          aria-label="Next Month"
                                          className={`react-datepicker__navigation react-datepicker__navigation--next`}
                                          style={
                                            customHeaderCount === 0
                                              ? { visibility: "hidden" }
                                              : null
                                          }
                                          onClick={increaseMonth}
                                        >
                                          <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                                            {">"}
                                          </span>
                                        </button>
                                      </div>
                                    )}
                                  />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </span>
      </div>
      <div>
        <div onClick={() => getSitters()} className="container">
          <div className="d-flex  justify-content-center  me-2 ms-2 pe-5 ps-5  py-2 CardFilterButton bg-primary ">
            Търси
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
