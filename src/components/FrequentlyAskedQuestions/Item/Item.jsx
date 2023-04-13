import React from "react";
import "./item.css";

const Item = ({ title, text, image }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center p-3">
        <img
          className="FrequentlyAskedQuestionsItem mt-3 "
          src={image}
          alt=""
        />
        <div className="fs-4 fw-bold mt-3 d-flex text-center">{title}</div>
        <div className="mt-2 d-flex  justify-content-center align-items-center text-center">
          {text}
        </div>
      </div>
    </>
  );
};

export default Item;
