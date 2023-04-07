import React, { useState, useEffect } from "react";
import "./sitters.css";
import { Link } from "react-router-dom";
import StarPicker from "react-star-picker";
import Button from "./../../CardFilter/Button/Button";
import {
  BACK_END_BASE_URL,
  SEARCH_URL,
  BOOK_ONE_SITTER,
} from "../../../utils/Utils";
import axios from "axios";
import { useSelector } from "react-redux";

const Sitters = ({ item }) => {
  const searchDataRedux = useSelector((state) => state.search);
  const [data, setData] = useState({
    offeredServices: "",
    city: "",
    startingDate: "",
    endingDate: "",
    selectedIcon: "",
  });

  const getSitters = () => {
    axios.post(BACK_END_BASE_URL + SEARCH_URL + BOOK_ONE_SITTER + item.id, {
      city: data.city,
      startingDate: data.startingDate,
      endingDate: data.endingDate,
      offeredServices: data.offeredServices,
    });
  };
  useEffect(() => {
    if (searchDataRedux) {
      setData(searchDataRedux);
    }
  }, [window.location]);

  return (
    <>
      <Link className="SittersTextDecorationNone" to={`/sitter/:` + item.id}>
        <div className="container ">
          <div className="border SitterReviewBox">
            <div className="d-flex  flex-row justify-content-between p-3">
              <div className="col-2">
                <img
                  className="Sitters"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtuV7uQhvSM_XdgMQv4DN2Tt8caDGnmWKTHgMajdbmw&s"
                  alt=""
                />
              </div>
              <div className="col-10">
                <div className="d-flex justify-content-between">
                  <div className="fw-bolder ms-1 fs-5">Лука Кенно</div>
                  <div className="ms-1">25 лв</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="ms-1">Пловдив</div>
                  <div className="ms-1">/ час</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="ms-1">
                    <div className="d-flex mt-1">
                      <img
                        src="https://pupuphooray.com/wp-content/uploads/2019/03/dog-icon.png"
                        alt=""
                        style={{ height: "1.6rem" }}
                      />
                      <div className="ms-2">Немска овчарка</div>
                    </div>
                  </div>
                  <div className="ms-1"></div>
                </div>
                <div className="">
                  <div className="d-flex flex-row">
                    {" "}
                    <span>
                      <StarPicker size={25} halfStars value={5} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mb-2 pb-2">
              <div className="">
                0decpritonsvvvdecpritonsdecpritonsdecpritonsdedasdasdasdas
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Sitters;
{
  /* <Link className="SittersTextDecorationNone" to={`/sitter/:` + item.id}>
<div className="border d-flex">
  <div className="d-flex col-2 align-items-center justify-content-center">
    <img
      className="Sitters"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtuV7uQhvSM_XdgMQv4DN2Tt8caDGnmWKTHgMajdbmw&s"
      alt=""
    />
    <div className="">
      <span>Лука</span>
      <span>Кенно</span>
    </div>
    <div className="">Рим</div>
  </div>
  <div className="d-flex col-6 align-items-center justify-content-around flex-column">
    <div className="fs-4 fw-bold">
      <span>{item.price}</span>
      <span>лв</span>
    </div>
    <div className="">
      <StarPicker halfStars value={item.rating} />
    </div>
    <div className="">Добър е</div>
  </div>
</div>
</Link>
<div className="">
<div onClick={() => getSitters()} className="d-flex ">
  <Button text={"поръчай2"} />
</div>
</div> */
}
