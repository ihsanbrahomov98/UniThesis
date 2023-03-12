import React from "react";
import Item from "./Item/Item";

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="fs-3 fw-bolder mb-2">Доверете се в нас</div>
        <div className="d-flex justify-content-between w-75">
          <Item question={"Question?"} answer={"answer"} />
          <Item question={"Question?"} answer={"answer"} />
          <Item question={"Question?"} answer={"answer"} />
        </div>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
