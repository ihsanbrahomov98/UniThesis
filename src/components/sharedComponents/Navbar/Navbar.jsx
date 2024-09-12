import React from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
import NavBarText from "./NavBarText/NavBarText";
import CardFilter from "../../CardFilter/CardFilter";

const Navbar = () => {
  return (
    <>
      <Header />
      <Body />
      <NavBarText/>
    </>
  );
};

export default Navbar;
