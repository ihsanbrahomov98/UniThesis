import React from "react";
import Item from "./item/Item";
import { ChevronDown } from "react-bootstrap-icons";
import { Building } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";

const Body = () => {
  return (
    <>
      <div className="d-flex">
        <div className="container col-6 d-flex flex-row justify-content-start ">
          <div className="mx-5 d-flex align-items-center">
            <div className="mx-1">
              {" "}
              <Item text={"kuche"} icon={"nqma"} />{" "}
            </div>
            <div className="mx-1">
              <ChevronDown />
            </div>
          </div>
          <div className="mx-5  d-flex align-items-center">
            <div className="mx-1">
              {" "}
              <Item text={"kuche"} icon={"nqma"} />{" "}
            </div>
            <div className="mx-1">
              <ChevronDown />
            </div>
          </div>
          <div className="mx-5">
            <Item text={"kuche"} />
          </div>
          <div className="mx-5">
            <Item text={"kuche"} />
          </div>
          <div className="mx-5">
            <Item text={"kuche"} />
          </div>
        </div>
        <div className="container col-6 d-flex flex-row justify-content-end">
          <div className="mx-5 d-flex align-items-center">
            <div className="mx-1">
              {" "}
              <Building />{" "}
            </div>
            <div className="mx-1">
              {" "}
              <Item text={"kuche"} icon={"nqma"} />{" "}
            </div>
            <div className="mx-1">
              <ChevronDown />
            </div>
          </div>
          <div className="mx-5 d-flex align-items-center">
            <div className="mx-1">
              {" "}
              <Person />{" "}
            </div>
            <div className="mx-1">
              {" "}
              <Item text={"kuche"} icon={"nqma"} />{" "}
            </div>
            <div className="mx-1">
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
