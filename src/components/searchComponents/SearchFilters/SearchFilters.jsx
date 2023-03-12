import React from "react";
import CardFilter from "../../CardFilter/CardFilter";
import Sitters from "../Sitters/Sitters";

const SearchFilters = () => {
  return (
    <div style={{ width: "40vw" }} className="">
      <div className="container">
        <div className="fs-5 fw-bold">
          Доверете се на нас! Доверете се на нас! Доверете се на нас! Доверете
          се на нас!
        </div>
      </div>
      <CardFilter isHeaderHidden={true} />
      <Sitters />
      <Sitters />
      <Sitters />
    </div>
  );
};

export default SearchFilters;
