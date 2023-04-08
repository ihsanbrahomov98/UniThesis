import React from "react";
import Body from "./Body/Body";
import Navbar from "../sharedComponents/Navbar/Navbar";
const RegisterSitter = () => {
  return (
    <div>
      <div className="position-relative">
        <Navbar />
        <img
          className=""
          src="https://img.freepik.com/free-vector/dog-background-vector-with-cute-pets-illustration_53876-127697.jpg?w=2000"
          alt="Snow"
          style={{ width: "100vw", height: "81vh", borderRadius: 0 }}
        />
        <Body />
      </div>
    </div>
  );
};

export default RegisterSitter;
