import React, { useState } from "react";
import BodyOfDropDown from "../BodyDropDown/BodyDropDown";
import "./ButtonDropDown.css";

const ButtonDropDown = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(true)}
        className="ButtonDropDown_container"
      >
        <div className="ButtonDropDown_Arrow"></div>
        <BodyOfDropDown open={open} />{" "}
      </div>
    </>
  );
};

export default ButtonDropDown;
