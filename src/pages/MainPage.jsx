import React from "react";
import AppOverview from "../components/AppOverview/AppOverview";
import CardFilter from "../components/CardFilter/CardFilter";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Footer from "../components/sharedComponents/Footer/Footer";
import Navbar from "../components/sharedComponents/Navbar/Navbar";
import UserReviews from "../components/UserReviews/UserReviews";

const MainPage = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Navbar />
        <CardFilter />
      </div>
      <div
        className="
      "
      >
        <div>
          <AppOverview />
          <UserReviews />
          <FrequentlyAskedQuestions />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainPage;
