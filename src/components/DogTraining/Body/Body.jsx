import React from "react";
import Button from "../../CardFilter/Button/Button";
import "./body.css";

const Body = () => {
  return (
    <>
      <div className="">
        <img
          className="DogTrainingSittingImage"
          src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2020/04/GettyImages-1202899105-Side-Hustle-Much-You-Might-Have-the-Wrong-Credit-Card-FB-770x462.jpeg"
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
