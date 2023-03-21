import React from "react";
import Button from "../../CardFilter/Button/Button";
import "./body.css";

const Body = () => {
  return (
    <>
      <div className="">
        <img
          className="DogBoardingImage"
          src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2020/04/GettyImages-1202899105-Side-Hustle-Much-You-Might-Have-the-Wrong-Credit-Card-FB-770x462.jpeg"
          alt="Snow"
          style={{ width: "100%", height: "85vh" }}
        />

        <div className="d-flex flex-column align DogBoardingInformationContainer">
          <div className="fw-bolder fs-2">Намери куче гледач </div>
          <div className="fw-bolder fs-2">Намери куче </div>
          <div className="fw-bold fs-5">Намери човек Намери човек</div>
          <div className="fw-bold fs-5">Намери човек Намери човек</div>
          <Button text={"търси"} containerDisabled="true" />
        </div>
      </div>
    </>
  );
};

export default Body;
