import React from "react";
import { GeoAltFill } from "react-bootstrap-icons";
import Button from "../../CardFilter/Button/Button";
import UserReviews from "../../UserReviews/UserReviews";
import SitterAccommodation from "../SitterAccommodation/SitterAccommodation";
import SitterDetails from "../SitterDetails/SitterDetails";
import SitterHomeAndPets from "../SitterHomeAndPets/SitterHomeAndPets";

const SitterInfo = () => {
  return (
    <>
      <SitterDetails />
      <div className="container w-50">
        <UserReviews />
      </div>

      <SitterAccommodation />
      <SitterHomeAndPets />
    </>
  );
};

export default SitterInfo;
