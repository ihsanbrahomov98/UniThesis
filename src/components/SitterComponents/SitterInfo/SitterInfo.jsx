import React from "react";
import { GeoAltFill } from "react-bootstrap-icons";
import Button from "../../CardFilter/Button/Button";
import UserReviews from "../../UserReviews/UserReviews";
import SitterAccommodation from "../SitterAccommodation/SitterAccommodation";
import SitterCalendar from "../SitterCalendar/SitterCalendar";
import SitterDetails from "../SitterDetails/SitterDetails";
import SitterHomeAndPets from "../SitterHomeAndPets/SitterHomeAndPets";

const SitterInfo = ({ item }) => {
  return (
    <>
      <SitterDetails item={item} />
      <div className="container w-75">
        <UserReviews item={item} isSitter={true} />
      </div>

      <SitterAccommodation item={item} />
      <SitterHomeAndPets item={item} />
      <SitterCalendar item={item} />
    </>
  );
};

export default SitterInfo;
