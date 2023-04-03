import React, { useState, useEffect } from "react";
import CardFilter from "../../CardFilter/CardFilter";
import Sitters from "../Sitters/Sitters";
import { useSelector } from "react-redux";

const SearchFilters = () => {
  const [sittersForMapping, setSittersForMapping] = useState([]);
  const sitters = useSelector((state) => state.sitter.sitters);

  useEffect(() => {
    setSittersForMapping(sitters);
    console.log(sittersForMapping);
  }, [sitters]);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div style={{ width: "40vw" }} className="">
      <div className="container">
        <div className="fs-5 fw-bold">
          Доверете се на нас! Доверете се на нас! Доверете се на нас! Доверете
          се на нас!
        </div>
      </div>
      <CardFilter isHeaderHidden={true} />
      {sittersForMapping &&
        sittersForMapping.map((item) => <Sitters item={item} />)}
    </div>
  );
};

export default SearchFilters;
