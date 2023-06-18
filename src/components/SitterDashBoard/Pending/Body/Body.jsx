import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CalendarCheck } from "react-bootstrap-icons";
import { addDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import bg from "../../../../assets/i18n/bg.json";
import "./body.css";
import axios from "axios";
import {
  ACCEPT,
  BACK_END_BASE_URL,
  DECLINE,
  FIND_ONE_SITTER,
  PENDING,
  SEARCH_URL,
  SITTERS_URL,
  UPDATE_CALENDAR,
} from "../../../../utils/Utils";
import { useSelector, useDispatch } from "react-redux";
import { setTakenDate, setUser } from "../../../../redux/UserSlice/UserSlice";

const Body = () => {
  const dispatch = useDispatch();
  const searchDataRedux = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({
    id: "",
    name: "",
    surName: "",
    image: "",
    description: "",
    price: "",
    email: "",
    telephone: "",
    startingDate: "",
    endingDate: "",
    address: "",
  });
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const getOne = async () => {
    const { data } = await axios.get(
      BACK_END_BASE_URL + SITTERS_URL + FIND_ONE_SITTER + searchDataRedux.id
    );
    let filtredData = data.jobs.filter(
      (e) =>
        e.jobStatus !== "accepted" &&
        e.jobStatus !== "history" &&
        e.jobStatus !== "decline"
    );
    setProducts(filtredData);
  };

  const validate = (dataInfo, dataType) => {
    setData((prevState) => ({
      ...prevState,
      [dataType]: dataInfo,
    }));
  };
  const declineJob = (e) => {
    const decline = async () => {
      console.log(e);
      await axios.post(
        BACK_END_BASE_URL + SEARCH_URL + DECLINE + searchDataRedux.id,
        {
          // TODO
          id: e.id,
        }
      );
      getOne();
    };
    decline();
  };

  const acceptJob = (e) => {
    console.log(e);
    const accept = async () => {
      await axios.post(
        BACK_END_BASE_URL + SEARCH_URL + ACCEPT + searchDataRedux.id,
        {
          // TODO
          id: e.id,
        }
      );
      getOne();
    };
    accept();
  };

  useEffect(() => {
    onSubmit();
    getOne();
  }, []);

  const onSubmit = (idOfSitter) => {
    console.log("searchDataRedux.id", searchDataRedux.id);
    const update = async () => {
      await axios
        .put(BACK_END_BASE_URL + SITTERS_URL + UPDATE_CALENDAR, {
          id: searchDataRedux.id,
          name: data.name,
          surName: data.surName,
          image: data.image,
          description: data.description,
          price: data.price,
          email: data.email,
          telephone: data.telephone,
          startingDate: data.startingDate,
          endingDate: data.endingDate,
          address: data.address,
        })
        .then((response) => {
          console.log("reponse:", response);
          dispatch(setTakenDate(response.data));
        });
    };
    update();
  };
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
      <div className="container border-start border-end border-top">
        <div className="row container pb-3 pt-3 d-flex align-items-center">
          <div className="col-2 ms-1 ">Име</div>
          <div className="col-2 ms-1">{bg.adminDashBoard.telephone}</div>
          <div className="col-2 ms-1">{bg.adminDashBoard.offeredService}</div>
          <div className="col-2 ms-1">{bg.adminDashBoard.startingDate}</div>
          <div className="col-2 ms-1">{bg.adminDashBoard.endingDate}</div>
          <div className="col-1 ">
            <div
              onClick={() => {
                setToggleCalendar(true);
              }}
              className="d-flex flex-row position-relative dropdown mt-1"
            >
              <div
                className="input-group-text adminDashBoardWhiteBg"
                id="basic-addon1"
              >
                <div className="">
                  <CalendarCheck />
                </div>
              </div>
            </div>
            <span
              onMouseLeave={() => setToggleCalendar(false)}
              className="position-absolute adminDashBoardPositionCalendar "
            >
              {toggleCalendar ? (
                <div className="d-flex justify-content-center mt-4">
                  <div className="mt-3">
                    <DatePicker
                      selected={startDate}
                      onChange={(update) => {
                        console.log(update);
                        validate(update[0], "startingDate");
                        validate(update[1], "endingDate");
                        setDateRange(update);
                      }}
                      startDate={startDate}
                      endDate={endDate}
                      excludeDates={calculateTakenDates(
                        searchDataRedux.takenDates
                      )}
                      selectsRange
                      selectsDisabledDaysInRange
                      inline
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="d-flex justify-content-center">
                {toggleCalendar === true ? (
                  <button
                    onClick={() => onSubmit(searchDataRedux.id)}
                    type="button"
                    className="btn btn-primary adminDashBoardRedButtonCalendar px-5"
                  >
                    Промени
                  </button>
                ) : (
                  ""
                )}
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="container border ">
        <div className="">
          <div className="">
            <div className="">
              {products &&
                products.map((e) => (
                  <div
                    key={e.id}
                    className="row border-bottom pb-3 pt-3 d-flex align-items-center"
                  >
                    <div className="col-2">
                      <div>Иван Петров</div>
                    </div>
                    <div className="col-2 ">{e.telephone}</div>
                    <div className="col-2">
                      <div className="">
                        <div className=" d-flex align-items- justify-content-start flex-row">
                          <img
                            src={
                              e.img
                                ? e.img
                                : "https://carducci.bg/wp-content/uploads/2021/06/2004090138_1web.jpg"
                            }
                            alt="tree"
                            style={{ width: "12%", height: "7%" }}
                          />
                          <span className="ps-3">{e.offeredServices} </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-2">{e.startingDate.split("T")[0]}</div>
                    <div className="col-2 " style={{ color: "green" }}>
                      {e.endingDate.split("T")[0]}
                    </div>
                    <div className="col-2">
                      <div className=" d-flex align-items- justify-content-start flex-row">
                        <span className="adminDashBoardMainBody ps-2 pe-2 me-3">
                          <div
                            onClick={() => acceptJob(e)}
                            type="button"
                            className="modalCursor p-1 "
                          >
                            {bg.adminDashBoard.accept}
                          </div>
                        </span>
                        <span
                          className="adminDashBoardRedButton ps-2 pe-2 d-flex justify-content-center align-items-center "
                          onClick={() => declineJob(e)}
                        >
                          {bg.adminDashBoard.decline}{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
