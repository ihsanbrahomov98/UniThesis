import React from "react";
import "./item.css";

const Item = ({ answer, question }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center p-3">
        <img
          className="FrequentlyAskedQuestionsItem mt-3"
          src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg"
          alt=""
        />
        <div className="mt-4">
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
