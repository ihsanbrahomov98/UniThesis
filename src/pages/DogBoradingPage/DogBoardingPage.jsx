import React from "react";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Footer from "../../components/sharedComponents/Footer/Footer";
import Navbar from "../../components/sharedComponents/Navbar/Navbar";
import DogBoarding from "./../../components/DogBorading/DogBoarding";
const DogBoardingPage = () => {
  return (
    <div>
      <Navbar />
      <DogBoarding />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
};

export default DogBoardingPage;
