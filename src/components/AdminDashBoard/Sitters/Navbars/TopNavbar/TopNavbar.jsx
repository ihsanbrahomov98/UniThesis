import React from "react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <>
      <div className="border-bottom  ">
        <div className=" d-flex ">
          <div
            style={{ height: "50px" }}
            className="col-2 d-flex justify-content-center align-items-center border-end fs-4 customOrange "
          >
            Admin Panel
          </div>
          <div
            style={{ height: "50px" }}
            className="col-8 d-flex justify-content-end align-items-center "
          ></div>
          <Link
            className="col-2 d-flex justify-content-center align-items-center border-start fs-4 customOrange "
            style={{ textDecoration: "none", color: "orange" }}
            to="/"
          >
            <div>Home Page</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
