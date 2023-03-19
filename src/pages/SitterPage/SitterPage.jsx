import React from "react";
import Navbar from "../../components/sharedComponents/Navbar/Navbar";

import SitterInfo from "../../components/SitterComponents/SitterInfo/SitterInfo";
import SitterReviews from "../../components/SitterComponents/SitterReviews/SitterReviews";

const SitterPage = () => {
  return (
    <>
      <Navbar />
      <SitterInfo />
      <SitterReviews />
    </>
  );
};

export default SitterPage;
