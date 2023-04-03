import React from "react";
import "./sitters.css";
import { Link } from "react-router-dom";
import StarPicker from "react-star-picker";
import Button from "./../../CardFilter/Button/Button";

const Sitters = ({ item }) => {
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
        <div className="d-flex ">
          <Button text={"поръчай"} />
        </div>
      </div>
    </>
  );
};

export default Sitters;
