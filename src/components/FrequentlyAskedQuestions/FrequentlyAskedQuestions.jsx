import React from "react";
import Item from "./Item/Item";

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="fs-3 fw-bolder mb-2">Доверете се в нас</div>
        <div className="d-flex justify-content-between w-75">
          <Item
            question={"Question?"}
            answer={"answer"}
            image={"https://cdn-icons-png.flaticon.com/512/4599/4599163.png"}
          />
          <Item
            question={"Question?"}
            answer={"answer"}
            image={"https://cdn-icons-png.flaticon.com/512/2295/2295086.png"}
          />
          <Item
            question={"Question?"}
            answer={"answer"}
            image={
              "https://cdn.w600.comps.canstockphoto.com/man-walking-dog-icon-outline-style-eps-vector_csp73451140.jpg"
            }
          />
        </div>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
