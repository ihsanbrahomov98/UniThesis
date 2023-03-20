import React from "react";
import "./DropDownItem.css";
// import { useNavigate } from "react-router-dom";

const DropDownItem = (props) => {
  // const navigate = useNavigate();

  // const redirect = (link) => {
  //   navigate(link);
  // };
  return (
    <a
      // onClick={() => redirect(props.linkToComponent)}
      className="DropDownItem_container"
    >
      <div className="DropDownItem_LeftIcon">
        {" "}
        <span>{props.leftIcon}</span>
        <span className="DropDownItem_Text">{props.children}</span>
      </div>
      <div className="DropDownItem_RightIcon">
        <span>{props.rightIcon}</span>
      </div>
    </a>
  );
};

export default DropDownItem;
