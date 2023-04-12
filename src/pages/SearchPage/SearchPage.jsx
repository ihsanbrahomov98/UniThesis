import React from "react";
import Map from "../../components/searchComponents/Map/Map";
import SearchFilters from "../../components/searchComponents/SearchFilters/SearchFilters";
import Navbar from "../../components/sharedComponents/Navbar/Navbar";

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex mt-4">
        <div className="d-flex flex-column">
          <SearchFilters />
        </div>
        <Map />
      </div>
    </>
  );
};

export default SearchPage;
