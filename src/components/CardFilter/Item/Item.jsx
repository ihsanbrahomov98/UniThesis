import React, { useState, useEffect, useCallback } from "react";
import DatePicker,  { registerLocale } from "react-datepicker";
import bg from "date-fns/locale/bg";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDown } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";
import { Building } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import moment from 'moment';
import 'moment/locale/bg'; // Import the Bulgarian locale

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
  moment.locale('bg'); // Set the locale to Bulgarian
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
  const [startDate, setStartDate] = useState(new Date() );
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
      <div className="">Избери услуга</div>
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABZVBMVEX///+yaDY6M0fyi6jyTAD5ycBLs/39+/rxOQCvYSn+7Ob5j61sUWQ0MESyZzOsWRfxgqLXtKGuXiLygaLzh6Y9r/0jGDTo1co0LEKwYy4rIjsmHDf7y8M2rf317Of5xbv5y9dDt//w49z59PH60t373+ex2/54dH8uJj2sWBO8fVbRqJHNoYjEjm797fH+9PfzlrD1rMBuwP2koqnX1tlhXGq3Yx7bvKu7e1K3cET85+P0obj3u8v50Nv4wtHu7e+Ylp3CwMXU6/5mYW5qvv3t9/+MiZKX0P60srhVUGDgxrdKRFUcDi+ocFH1fFchMUr5uKb3nILco47XnIXFk3X729Xaj7bmi66fotqL0//G5f6BfYiDyP7j8v98jamSgoWheGpunsxroM9dqOOEj6V4l7qZfnr3ZDDLRhmkdFznTxVVPEZ6QT+pSTPHTCj0bkL5sZz2imsPHDlvRkmNS0GYQTbhhGyf/AdHAAAOTklEQVR4nO1d+V/byBVHxlgWLZIRMrYgYGzHBHOTZDEGArkIiSEXgR45Nmmy2bTJJrvZdvv3dyT50GjmjWYkucL+6PtbIll6X7/7zeAZGUmQIEGCBAkSJEiQIEGCBAkSkKgWGo2CHLcU/UNhp64ril5fq8QtSZ9wrqmSDVNrdP6vWqnMxylTpFhWpC60SfQfhdVmXdN1rb48ORQsV3TJBa0wqepmW6eqop1X45YvNCqahEFXVPc/FaUQt4RhsWpKEFTTgtaKW8SQAOkp0trZ2dmLZaU+2Fqs6nSCZvPsioOxF+ZAJ8p5OkPlBaLWxpUrcQsZCnQdKmddfgil3bilDAWqib5wE0RajFvIUKDEUnUHJzhWGuik6M2Hlo0+8zIcbDNdVQiKHoJjYxdxCxkOOx6K6hrBcCxuGcNBXtPwQu2MYFiKW8awaO1oVn9o6c9sNpsUhgOd823MtxqtQlNSmyW7jCEYbsQtYDRYVpUSyc5mOBR9Iur1TaVEJThWGo9btmiwooAMh0SHLa1JN9IBL2p6qKwBbjg0DEdGACMdhmzRxgXEMG7BIsMupMS4BYsMMsBwsBtEDICZDnhv4QagxMHuD3Fc0CgOS0njgJYRhycdWpCHOpTaoFAcolDqgPDFIQqlbcxfKZVcLIfLDduQx3cvLiyeiGhp+FTYg1zd3b0YRg0mSJAgQYLQkGsHW3tX45aif6jtGTnDMHL7cQvSJ9Q2c8aojdze0AzY3NjPjXZhjK7HLU702DRG3cgNmzOuj+IEEcXhcsaruVECQ+WM+xSCw+SM8h6VoKXGWtyyRQLSBV0UF+KWLgLQXNBF8SBu+UKD7oLDo0V5D7bQNqYG2hdZLthD3FKGwC0fC3VgDG7q3+IiOLgF3MYmj4XamBpIijWDm+BgUlzgtNCBpcjrgl0MmC8KuGBPi4OUFmvi/AaL4oGohQ4aRWEXHDSKAVxwsCjyFWoQBqEjDsNvICguhLBRG8ZB7XLvbKcSzO2JUMzlNrcWLu2Iap/GMHdAJ85gaeSmNvevXkKaGzQmRi2QdxqGMTW6d9lslqJCY9MScTMARYdmbmoU2exlGR1vkJkit2VfEXFEGk0D2exlUOYWocLOII28Is4yN7oVt82ukyrsZLeDsAw7NKdijT7E4LDX87HTpMA0INaKoEaocLN7jTn3Nmr+Q9VLwZCIly5pSPbu+9b5/TQXo5WSJPZ6Fyku2oMh87dcUzGGGlKFrq9bZhGwjdlveaODuOhRPM3Ycl9myGw4ut6f4uAX53icEAb3GEZR05F6YdPaa8NmGGOyINIBrkJWUWN0c4pcW9ganWLQ9Dz0/wmZVCEeEhjB0hMeN2r7e4AyjdH46lOiZvE6DLWton4XFuT1WxRlGkZ8NkqGypzn22aVbdBDawd7o1M9lsZfjvtOBAShIcO7On8LZrhHfWQb61f3Ny1lGlN//Vu53EcKbFC6Ju8tcFHDkQBqC/u3Nv6ez+SP+iI+B4gwQu4+WJ/6EwCDuJeOl4jhy2jl5galYCHuuflnEA/53nKUz2ReRyw5L4iik7JSdmNmAkAxxfma65lMPlrBuUEw3CTvuVZMQZi9w/eaxfjM1BtoaD0cyC+VKl7je83RXHxm6mFICf+H0wyKs4d8r4nRTPd8VXhnlsFw6TbfaywzXYxUcG5gZbdBy+C3lxgMU0uc70HRNKakj9Xd1DnDIzjQCMSa43xm7m6kknPD1f7SGxymClPFe3yveYNizfUo5RZAb8xC6RRQvmcFGoRp/lgz9yZSwfnRGbPQq8yHM2yGSw/43nI3xroGNQ92uDGos7BXTDdEmOF8y/1MbJ6Iws2+1ZnT9zSfTPgx5CxOXyJPvB+h0IKQr27Ru1n51IdgqviI8x2WEuPqMBi4ycr3Dk5v8j3qLlJipr/SBsENdrKwlfiK81mvUWET4zQDwD2/QIMwyzlGs9rE2DIGCH9+/LHGqk4vnZ0yG4uumZ7wPg4Fm8tmp3d88r2Dac5Y49jp5YqnD/wDTYq/EUZ2iuJp/lK54iO/fO+AtxG24+nlckXffO9g6Qb3ExHBfIAmo7rSn1/x58j3bXA/0nLFvHgJ3tTrffm1GI583zZTzkZ4xClthANqQ5f0vhx2wxgk4uBthC0silOsKpKk98VMfRuLLngbYQviFK1fT9f7cWIIV753wDt0s3Es6IuVuvVz4g3/G4XBHCR6wNsI2zieE6K4bP1yujIpLL8/2INEHAKxZqRN8T7nilvLPmujLwx/4A00CMUfhB5t+WImzzfVcE4pUlaCUPABZ753IBJrRpyhRmaOZw6+4pxgYJ4HI8GC3yARB+/QrYM3GUuLr30tdb590Ia5FpQHDL9BogdCsQbh6L4VUn1X3Zbbh6Woy0F5wHglEGhSjEa4Wl+lXzi2LfU6U42tzpE+6k5IOhRwNhYdgEO3+Tp0vtfdjNVqMLO/1DljQ202ViYbrSh/514g3zsAG+GmqkFFpa3GfAaMOJO9g1JUBUHXpJXISnD+xqKjRGjohsRUILHelPMMjrSDtRQlqvqNu7HoAhq6VTTJhL1oMQ9zXKOeb1ePKPnzDBJxgLGmqUoKnM6Ojh2O+WPvfKNAHslkI5pz+6CilKFZcOhmJW2d8cUfHc/ZHOfuL7oDq9xU6QwlPYKdjjeBgubkBsM9oVhTsdyJeZpgW4+I5PUuSXkHPIMxgiL1EFAViibXYC2CQze7tNTZkX4xM9cmWT5+iVjONxmHTIZO//IJ4IQzqIWArqXgoZt9ipuq+tjW3deOIpFLzpUbdchEIzFTMMpMoycfwnYKDd0KdtQ3/b/5l68zZQTE8kfgjMl2rAmZ+V9BFanTI90BawGwrnEMTjlvtRodTAK4/fadghh+2GYxNM9DKfEGyODUyQcPwG8AcsRzh6Kp8MDc/kcmU37MslLJVEPM3mAVnXYSHtQbF6EWqsC0OS+Ut2U/M5VULfDgBsoTyAm7kwo5RacIDr+rQO4GpDeteKMwlYiizVowSz0sQi3FqWsUA3THM9C0RhZiKG1/RGb6wE/vihQo3kC5oLiEpfOHVIqz4DqbkJVK6mMrnPp+Rg0yRL0HpfolT6qjxlt4WONjcV5sv0dK/JEZTm1owvMpKE8UU4TstC19MyBDsMQEtGMp0Sec2tCXxdpFKE8UT0jRDyn+OgH6/o6oEj+W/XJimyIwIqHjDhBGl6iJnGwgJ+AVfXqnx6KIHLH80Z+ikCtCXf0MfWWJZMgYCwszNN9ZdvrAl6JI/Xa4RM8Ts0ChQmEIbx46F2Uobf9kUXznE1A5at0egDwxDdUpJEPGChTljGhfiu+tlPGOrUVwxkUBkCemQanJiTFj79AKeYCyH1Tlg1XavO1SNHWizNEEWmGgmj6FNyGQDBkLUA1xhpIqWRTLP207vJRJubGjKy5jMEUIAnnilLGji2TI2DrUCsCwQ/G9aZ9JLFnPmW+saRqiaZqKXl8TiDJAnphmrQpSGMLrTy2xsq1DUf9QdizVlLTunGe+0Fg9X50siBTe9EJ6gr2di8IQvlmsfepRtDN/pvzh5+1Qa0/0fqJYZO9Xo6xNRc4QRdSf7dFN+UOYLX/0uROlFPVhyFoHrgRliHokW42BtlJ18OmfE6QOaaWoH0PGDj7aCgQn1O1/2Zkx+H64J9n05y9eikuPfP2Y2JrJWgauBmeIssL2Y9QSB962+TybRvjlKSYsUIr6MGRs4KsGyRZuPSqBB4jPbILp9Fc3xRmeHaMEQ3CGYUG8avNw1ANOnq60CabT3552LXWWa/s9wRCeYSCogg0iAaEau4fdLsF0zxnhUpTNkLnhpBmSoCQF2n9ZTWNwnJFRirIZwjOMEfEmn0SgnW2fcIa2M7JKUZyht2Eusu4W0KFKj7tBzPRJ1sMw/W2CWYoyGTJmGCIZX9WbFfoV8Wg6ThBEzsj7lwUkQ+Y22knObGFqzRYUlgKY6a8kxSz/6aLesQ64aGEBmia6/1tVdOXc7iDoDINsGiLNNPtbYIasXbQVYKqv7kia7kDTllc6DRGQWoIk/ecExSeBGbL+/gkyUrU5IlcqBYSKW3qAYaBo+htBMTBD1iZacORNnyQBDIMt35c8FLPcR8ITDOEghUdSt/j0XRVQARSsNr3AKWaf8X7Qy5BR0mBGai675EdmSgHEMOB29vHPGMXvvJ8j/BC+1W2k5ho2laKaKcSQ/n34Q8ayRpb3Y57hDiPhz7sjqd7CFoSpZgqW6T57cmC4s0Z2nPNDHoaMGQZmpHq1u+8XVAvG0N9teeDKGtyO6NmAyphh7GBG6hkP0/6gCWPoNvEQO4VdWYPXER2G7d+Mevr099vQjdiMxloNq9bdaqEs47oZmtiCQIitQmNdip85P3H4e+rky5cv//7lP3/88fXrt2//hW7EVKZZXd6OTzR1M9QLbiWG2bPXzRq8jniRxoNw9hOQSjE+dtJu+ERTjGFl1c9teTHfFjhb4rv/CmdRO4/ZpJ3RsOBKMVNch9g0WWQ5jUAna3A64gWlM/mVMmnA44rjRz5mijMc0SMyU4TvWYHSlMKQagDLhJF68gepFg/D86jMdKSdNTgdkcownf3uGSVjs+BO2eVjph6G0ZnpiDM+5XREOsN0No030Q1qsMeSnOTDUFaiM1M7a3B2wQBDxPG5+7ZlasJmm6mHIbaTI6yZWkkgHcZKbYqfek8AilC2mXoZtqI0U37sggzdpV8LqNCYZuplWPXJLjEwTGeftAMOZGBMM/UyxGt1wm1jYdgZFoCdEtNMCYZ+RVA8DO14g/1hT90tWpOhFtPF0N6hgHeY/fijZyo+ZZmwk4bcrGsd1LHNBoW664pnOrHiuiTZ5n7u+p/AbbA4xlnoJH65B/zTMniF9iHGzQkSJEiQIEGCBAkSJEgQNf4H30e+cIQWcloAAAAASUVORK5CYII="
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
          <li onClick={() => setIconAndText(TRAINING, dogTraining)}>
            <div className="dropdown-item w-100 d-flex CardFilterItemCursor">
              <img className="CardFilterItemImage" alt="" src={dogTraining} />
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
                "https://friendlystock.com/wp-content/uploads/2023/02/1-cartoon-dog-sleeping-vector-clip-art.jpg"
              )
            }
          >
            <div className="dropdown-item w-100 d-flex CardFilterItemCursor">
              <img
                className="CardFilterItemImage"
                alt=""
                src="https://friendlystock.com/wp-content/uploads/2023/02/1-cartoon-dog-sleeping-vector-clip-art.jpg"
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
      <div className="mb-2">Избери период</div>
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
          className="position-absolute "
        >
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
                <div onClick={handleDateClick} className="date-picker-trigger">
                  {startDate && endDate
                    ? `Selected range: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                    : 'Click here to select a date range'}
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
                      onDayMouseDown={(date) => handleMouseDown(date)}
                      onDayMouseUp={(date) => handleMouseUp(date)}
                      onDayMouseEnter={(date) => handleMouseEnter(date)}
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
                            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
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
                            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
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
      <div onClick={() => getSitters()} className="container">
        <div className="d-flex justify-content-center mt-3 pe-3 ps-3 py-2 CardFilterButton bg-primary ">
          Търси
        </div>
      </div>
    </>
  );
};

export default Item;
