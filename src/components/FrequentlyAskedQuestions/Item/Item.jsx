import React from "react";
import "./item.css";

const Item = ({ answer, question, image }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center p-3">
        <img className="FrequentlyAskedQuestionsItem mt-3" src={image} alt="" />
        <div className="fs-4 fw-bold mt-3">TiTitleTitletle</div>
        <div className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          laudantium sunt tempore recusandae assumenda natus aut quis,
          consequatur excepturi vero, optio odit. Quod deleniti perferendis
          pariatur repellat maiores ut dolore!
        </div>
      </div>
    </>
  );
};

export default Item;
