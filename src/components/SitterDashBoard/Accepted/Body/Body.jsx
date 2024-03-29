import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CalendarCheck } from "react-bootstrap-icons";
import { addDays } from "date-fns";
import { useSelector } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import bg from "../../../../assets/i18n/bg.json";

import "./body.css";
import axios from "axios";
import {
  BACK_END_BASE_URL,
  DECLINE,
  FIND_ONE_SITTER,
  SEARCH_URL,
  SITTERS_URL,
} from "../../../../utils/Utils";

const Body = () => {
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
    console.log("here");
    let filtredData = data.jobs.filter((e) => e.jobStatus === "accepted");
    setProducts(filtredData);
    console.log(data);
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

  const validate = (dataInfo, dataType) => {
    setData((prevState) => ({
      ...prevState,
      [dataType]: dataInfo,
    }));
  };

  useEffect(() => {
    getOne();
  }, []);

  const calculateTakenDates = (takenDates) => {
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
      <div className="container border-start border-end border-top   ">
        <div className="row container  pb-3 pt-3 d-flex align-items-center ">
          <div className="col-2 ms-1 ">Име</div>
          <div className="col-2 ms-1">{bg.adminDashBoard.telephone}</div>
          <div className="col-2 ms-1">{bg.adminDashBoard.offeredService}</div>
          <div className="col-2 ms-1">{bg.adminDashBoard.startingDate}</div>
          <div className="col-2 ms-1">{bg.adminDashBoard.endingDate}</div>
          <div className="col-1 "></div>
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
                    className="row pb-3 pt-3 d-flex align-items-center sitterDashBoardAccepted"
                  >
                    <div className="col-2">
                      <div>Иван Петров</div>
                    </div>
                    <div className="col-2 ">089213211</div>
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
                        <span
                          className="sitterDashBoardDeclineButton p-2 d-flex justify-content-center align-items-center "
                          onClick={() => declineJob(e)}
                        >
                          {bg.adminDashBoard.delete}{" "}
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
