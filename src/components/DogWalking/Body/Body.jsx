import React from "react";
import Button from "../../CardFilter/Button/Button";
import "./body.css";
import dogWalking from "../../../assets/Images/dogWalking.jpg";
const Body = () => {
  return (
    <>
      <div className="border bg-black">
        <img
          className="DogWalkingImage"
          src={dogWalking}
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
