import React from "react";
import DogSitting from "../../components/DogSitting/DogSitting";

import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Footer from "../../components/sharedComponents/Footer/Footer";
import Navbar from "../../components/sharedComponents/Navbar/Navbar";

const DogSittingPage = () => {
  return (
    <>
      <Navbar />
      <DogSitting />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default DogSittingPage;
