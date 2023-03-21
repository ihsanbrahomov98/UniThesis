import React from "react";
import DogTraining from "../../components/DogTraining/DogTraining";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Footer from "../../components/sharedComponents/Footer/Footer";
import Navbar from "../../components/sharedComponents/Navbar/Navbar";

const DogTraingingPage = () => {
  return (
    <>
      <Navbar />
      <DogTraining />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default DogTraingingPage;
