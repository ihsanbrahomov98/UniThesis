import React, { useState, useEffect, useRef } from "react";
import BodyOfDropDown from "../BodyDropDown/BodyDropDown";
import "./ButtonDropDown.css";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const ButtonDropDown = () => {
  const [open, setOpen] = useState(true);
  const buttonRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!buttonRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <div ref={buttonRef} className="ButtonDropDown_container">
        <div className="ButtonDropDown_Arrow"></div>
        <BodyOfDropDown open={open} />{" "}
      </div>
    </>
  );
};

export default ButtonDropDown;
