import React from "react";
import DogWalking from "../../components/DogWalking/DogWalking";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Footer from "../../components/sharedComponents/Footer/Footer";
import Navbar from "../../components/sharedComponents/Navbar/Navbar";
const DogWalkingPage = () => {
  return (
    <>
      <Navbar />
      <DogWalking />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default DogWalkingPage;
