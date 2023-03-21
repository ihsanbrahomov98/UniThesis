import React from "react";
import DogVetExamining from "../../components/DogVetExamining/DogVetExamining";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Footer from "../../components/sharedComponents/Footer/Footer";
import Navbar from "../../components/sharedComponents/Navbar/Navbar";

const DogVetExaminingPage = () => {
  return (
    <>
      <Navbar />
      <DogVetExamining />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default DogVetExaminingPage;
