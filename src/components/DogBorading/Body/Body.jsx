import React from "react";
import Button from "../../CardFilter/Button/Button";
import "./body.css";

const Body = () => {
  return (
    <>
      <div className="">
        <img
          className="DogBoardingImage"
          src="https://media.istockphoto.com/id/1255917970/photo/two-sleeping-golden-retrievers-touching-heads.jpg?s=612x612&w=0&k=20&c=z1CR5RCgu2AcT51xxRxUj8imND_U2xttATjzr0ZtVHQ="
          alt="Snow"
          style={{ width: "100%", height: "85vh" }}
        />

        <div className="d-flex flex-column align DogWalkingInformationContainer">
          <div className="fw-bolder fs-2">Намери подходящия</div>
          <div className="fw-bolder fs-2">гледач за теб</div>
          <div className="fw-bold fs-5">Професионалисти с много опит!</div>
          <div className="fw-bold fs-5">Без почивни дни!</div>
          <Button text={"Търси"} containerDisabled="true" />
        </div>
      </div>
    </>
  );
};

export default Body;
