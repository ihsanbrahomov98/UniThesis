import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDown } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";
import { Building } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";

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

const Item = () => {
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedText, setSelectedText] = useState("Избери услуга");
  const [selectedDates, setSelectedDates] = useState("Избери дати");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [data, setData] = useState({
    offeredServices: "",
    city: "",
    startingDate: "",
    endingDate: "",
    selectedIcon: "",
    telephone: "",
    name: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchDataRedux = useSelector((state) => state.search);

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
  };
  useEffect(() => {
    if (searchDataRedux) {
      setData(searchDataRedux);
    }
  }, [window.location]);

  return (
    <>
      <div className="">Търся услуга</div>
      <div className="d-flex flex-row dropdown mt-1">
        <div className="">
          <div className="input-group-text " id="basic-addon1">
            <div className="">
              <img
                className="CardFilterItemIcon "
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/12/12638.png"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="d-flex justify-content-between btn border w-100"
          data-bs-toggle="dropdown"
        >
          <div className="d-flex flew-row">
            <div className="">
              {data.selectedIcon ? (
                <img
                  className="CardFilterItemImage me-2"
                  alt="d"
                  src={data.selectedIcon}
                />
              ) : (
                "Изберете услуга"
              )}
            </div>
            <div>{data.offeredServices}</div>
          </div>
          <div className="">
            <ChevronDown />
          </div>
        </button>

        <ul className="dropdown-menu CardFilterItemWidth">
          <li
            onClick={() =>
              setIconAndText(
                WALKING,
                "data:image/png;base64,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"
              )
            }
          >
            <div className="dropdown-item   d-flex CardFilterItemCursor ">
              <img
                className="CardFilterItemImage"
                alt=""
                src="data:image/png;base64,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"
              />
              <div className="ms-2">Разходка</div>
            </div>
          </li>

          <li
            onClick={() =>
              setIconAndText(
                VET_VISITING,
                "https://cdn-icons-png.flaticon.com/512/2295/2295137.png"
              )
            }
          >
            <div className="dropdown-item w-100 d-flex CardFilterItemCursor">
              <img
                className="CardFilterItemImage"
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/2295/2295137.png"
              />
              <div className="ms-2">Ветеринар</div>
            </div>
          </li>
          <li
            onClick={() =>
              setIconAndText(
                TRAINING,
                "data:image/png;base64,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"
              )
            }
          >
            <div className="dropdown-item w-100 d-flex CardFilterItemCursor">
              <img
                className="CardFilterItemImage"
                alt=""
                src="data:image/png;base64,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"
              />
              <div className="ms-2">Тренировка</div>
            </div>
          </li>
          <li
            onClick={() =>
              setIconAndText(
                SITTING_AT_YOUR_HOME,
                "https://cdn.w600.comps.canstockphoto.com/male-sitting-with-domestic-animal-dog-clipart-vector_csp63831651.jpg"
              )
            }
          >
            <div className="dropdown-item w-100 d-flex CardFilterItemCursor">
              <img
                className="CardFilterItemImage"
                alt=""
                src="https://cdn.w600.comps.canstockphoto.com/male-sitting-with-domestic-animal-dog-clipart-vector_csp63831651.jpg"
              />
              <div className="ms-2">Наглеждане във вашият дом</div>
            </div>
          </li>
          <li
            onClick={() =>
              setIconAndText(
                SITTING_AT_SITTER_HOME,
                "https://img.freepik.com/premium-vector/lazy-dog-sleeping-icon-sleeping-shiba-inu-animal-icon-isolated_138676-510.jpg"
              )
            }
          >
            <div className="dropdown-item w-100 d-flex CardFilterItemCursor">
              <img
                className="CardFilterItemImage"
                alt=""
                src="https://img.freepik.com/premium-vector/lazy-dog-sleeping-icon-sleeping-shiba-inu-animal-icon-isolated_138676-510.jpg"
              />
              <div className="ms-2">Наглеждане във наш дом</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-1">Избери град</div>
      <div
        className="input-group 
      "
      >
        <div className="d-flex flex-row dropdown mt-1 w-100">
          <div className="">
            <div className="input-group-text " id="basic-addon1">
              <div className="">
                <Building />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="d-flex justify-content-between btn border  w-100"
            data-bs-toggle="dropdown"
          >
            <div className="d-flex flew-row">
              <div className="">{data.city ? data.city : "Изберете Град"}</div>
            </div>
            <div className="">
              <ChevronDown />
            </div>
          </button>

          <ul className="dropdown-menu CardFilterItemWidth">
            <li
              className="dropdown-item w-100 d-flex CardFilterItemCursor"
              onClick={() => filterSearchData(CityArray.SOFIA, "city")}
            >
              {CityArray.SOFIA}
            </li>
            <li
              className="dropdown-item w-100 d-flex CardFilterItemCursor"
              onClick={() => filterSearchData(CityArray.PLOVDIV, "city")}
            >
              {CityArray.PLOVDIV}
            </li>
            <li
              className="dropdown-item w-100 d-flex CardFilterItemCursor"
              onClick={() => filterSearchData(CityArray.BURGAS, "city")}
            >
              {CityArray.BURGAS}
            </li>

            <li
              className="dropdown-item w-100 d-flex CardFilterItemCursor"
              onClick={() => filterSearchData(CityArray.VARNA, "city")}
            >
              {CityArray.VARNA}
            </li>
            <li
              className="dropdown-item w-100 d-flex CardFilterItemCursor"
              onClick={() => filterSearchData(CityArray.SMOLYAN, "city")}
            >
              {CityArray.SMOLYAN}
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="mb-1">Въведи номер</div>
      <div
        className="input-group mb-1
      "
      >
        <div className="d-flex flex-row dropdown mt-1 w-100">
          <div className="">
            <div className="input-group-text " id="basic-addon1">
              <div className="">
                <Telephone />
              </div>
            </div>
          </div>
          <input
            onChange={(e) => filterSearchData(e.target.value, "telephone")}
            type="text"
            className="form-control"
            placeholder="Телефон*"
            aria-label="Телефон"
            aria-describedby="basic-addon1"
            value={data.telephone}
          />
        </div>
        <div className="mb-1">Въведи име и фамилия</div>
      </div> */}

      {/* <div
        className="input-group
      "
      >
        <div className="d-flex flex-row dropdown w-100">
          <div className="">
            <div className="input-group-text " id="basic-addon1">
              <div className="">
                <Person />
              </div>
            </div>
          </div>
          <input
            onChange={(e) => filterSearchData(e.target.value, "name")}
            type="text"
            className="form-control"
            placeholder="Име*"
            aria-label="Име"
            aria-describedby="basic-addon1"
            value={data.name}
          />
        </div>
      </div> */}
      <div className="mb-2">Търся услуга</div>
      <div
        onClick={() => setToggleCalendar(true)}
        className="d-flex flex-row position-relative dropdown "
      >
        <div className="input-group-text" id="basic-addon1">
          <div className="">
            <CalendarCheck />
          </div>
        </div>
        <button
          type="button"
          className="d-flex justify-content-between btn border w-100"
          data-bs-toggle="dropdown"
        >
          <div className="d-flex">
            <div className="">
              <span className="">
                {data.endingDate ? (
                  <span>
                    <span>
                      {data.startingDate && data.startingDate.getDate()}
                    </span>
                    <span>.</span>
                    <span>
                      {data.startingDate && data.startingDate.getMonth() + 1}
                    </span>
                    <span>.</span>
                    <span>
                      {data.startingDate && data.startingDate.getFullYear()}
                    </span>
                  </span>
                ) : (
                  "Изберете дни"
                )}
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
        <span
          onMouseLeave={() => setToggleCalendar(false)}
          className="position-absolute "
        >
          {toggleCalendar ? (
            <div className="d-flex justify-content-center mt-4">
              <div className="mt-3">
                <DatePicker
                  selected={startDate}
                  onChange={(update) => {
                    console.log(update);

                    filterSearchData(new Date(update[0]), "startingDate");
                    console.log(update[0]);
                    filterSearchData(new Date(update[1]), "endingDate");
                    setDateRange(update);
                  }}
                  startDate={startDate}
                  endDate={endDate}
                  excludeDates={[]}
                  selectsRange
                  selectsDisabledDaysInRange
                  inline
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </span>
      </div>
      <div onClick={() => getSitters()} className="container">
        <div className="d-flex justify-content-center mt-3 pe-3 ps-3 py-2 CardFilterButton bg-primary ">
          търси
        </div>
      </div>
    </>
  );
};

export default Item;
