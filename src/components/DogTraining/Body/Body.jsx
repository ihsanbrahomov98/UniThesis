import React from "react";
import Button from "../../CardFilter/Button/Button";
import "./body.css";

const Body = () => {
  return (
    <>
      <div className="">
        <img
          className="DogTrainingSittingImage"
          src="https://www.hartz.com/wp-content/uploads/2021/10/Dog-Training-Basics-2.jpg"
          alt="Snow"
          style={{ width: "100%", height: "85vh" }}
        />

        <div className="d-flex flex-column align DogTrainingInformationContainer">
          <div className="fw-bolder fs-2">Намери подходящия</div>
          <div className="fw-bolder fs-2">трениъор за теб</div>
          <div className="fw-bold fs-5">Професионалисти с много опит!</div>
          <div className="fw-bold fs-5">Без почивни дни!</div>
          <Button text={"Търси"} containerDisabled="true" />
        </div>
      </div>
    </>
  );
};

export default Body;
