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
        <div className="container mt-1">
          <div className="border d-flex">
            <div className="d-flex col-6 align-items-center justify-content-center flex-column">
              <img className="Sitters" src={item.image} alt="" />
              <div className="">
                <span>{item.name}</span>
                <span>{item.surName}</span>
              </div>
              <div className="">{item.city}</div>
            </div>
            <div className="d-flex col-6 align-items-center justify-content-around flex-column">
              <div className="fs-4 fw-bold">
                <span>{item.price}</span>
                <span>лв</span>
              </div>
              <div className="">
                <StarPicker halfStars value={item.rating} />
              </div>
              <div className="">{item.description}</div>
            </div>
          </div>
        </div>
      </Link>
      <div className="">
        <div onClick={() => getSitters()} className="d-flex ">
          <Button text={"поръчай2"} />
        </div>
      </div>
    </>
  );
};

export default Sitters;
