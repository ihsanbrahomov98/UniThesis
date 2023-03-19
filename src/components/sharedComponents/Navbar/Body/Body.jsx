import React, { useState } from "react";
import Item from "./item/Item";
import { ChevronDown } from "react-bootstrap-icons";
import { Building } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import "./body.css";

const Body = () => {
  const [hoveredNavBarItem, sethoveredNavBarItemNavBarItem] = useState("");
  const [hoveredAccount, setHoveredAccount] = useState("");

  const handleMouseOverForNavbarItem = () => {
    sethoveredNavBarItemNavBarItem(true);
  };

  const handleMouseOutForNavbarItem = () => {
    sethoveredNavBarItemNavBarItem(false);
  };
  const handleMouseOverForAccount = () => {
    setHoveredAccount(true);
  };

  const handleMouseOutForAccount = () => {
    setHoveredAccount(false);
  };
  return (
    <>
      <div className="d-flex flex-column">
        <div className="d-flex position-relative">
          <div
            onMouseOver={handleMouseOverForNavbarItem}
            onMouseOut={handleMouseOutForNavbarItem}
            className="container col-6 d-flex flex-row justify-content-start BodyAliceblue "
          >
            <div className="mx-5 d-flex align-items-center">
              <div className="mx-1">
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
          <div className=""></div>
          <div className="container col-6 d-flex flex-row justify-content-end BodyAliceblue">
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
            <div
              onMouseOver={handleMouseOverForAccount}
              onMouseOut={handleMouseOutForAccount}
              className="mx-5 d-flex align-items-center"
            >
              <div className="d-flex position-relative">
                <div className="mx-1">
                  {" "}
                  <Person />
                </div>
                <div className="mx-1">
                  {" "}
                  <Item text={"kuche"} icon={"nqma"} />{" "}
                </div>

                <div className="mx-1">
                  <ChevronDown />
                </div>
              </div>

              <div
                className={
                  hoveredAccount
                    ? " d-flex position-absolute mt-5 ms-1"
                    : "d-none"
                }
              >
                <div className="d-flex flex-column">
                  <div className="mt-4">login</div>
                  <div className="">logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div
          onMouseOver={handleMouseOverForNavbarItem}
          onMouseOut={handleMouseOutForNavbarItem}
          className={
            hoveredNavBarItem
              ? "d-flex justify-content-around position-absolute w-100 mt-4 pb-2 border-bottom border-start border-end BodyAliceblue"
              : "d-none"
          }
        >
          <div className="d-flex flex-column align-items-center ">
            <div className="">Icon</div>
            <div className="fs-4 fw-bold">text</div>
            <div className="">text text text</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="">Icon</div>
            <div className="fs-4 fw-bold">text</div>
            <div className="">text text text</div>
          </div>{" "}
          <div className="d-flex flex-column align-items-center">
            <div className="">Icon</div>
            <div className="fs-4 fw-bold">text</div>
            <div className="">text text text</div>
          </div>{" "}
          <div className="d-flex flex-column align-items-center">
            <div className="">Icon</div>
            <div className="fs-4 fw-bold">text</div>
            <div className="">text text text</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
