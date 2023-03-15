import React from "react";
import Navbar from "../../components/sharedComponents/Navbar/Navbar";
import SitterInfo from "../../components/SitterComponents/SitterInfo/SitterInfo";
import UserReviews from "../../components/UserReviews/UserReviews";

const SitterPage = () => {
  return (
    <>
      <Navbar />
      <SitterInfo />
    </>
  );
};

export default SitterPage;
