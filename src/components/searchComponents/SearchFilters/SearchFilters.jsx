import React, { useState, useEffect } from "react";
import CardFilter from "../../CardFilter/CardFilter";
import Sitters from "../Sitters/Sitters";
import { useSelector } from "react-redux";

const SearchFilters = () => {
  const [sittersForMapping, setSittersForMapping] = useState([]);
  const sitters = useSelector((state) => state.sitter.sitters);

  useEffect(() => {
    setSittersForMapping(sitters);
  }, [sitters]);

  return (
    <div style={{ width: "40vw" }} className="">
      <div className="container"></div>
      <CardFilter isHeaderHidden={true} />

      <div className="mt-2">
        {" "}
        {sittersForMapping &&
          sittersForMapping.map((item) => <Sitters item={item} />)}
      </div>
    </div>
  );
};

export default SearchFilters;
