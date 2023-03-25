import React from "react";
import "../../Body/body.css";
import { Link } from "react-router-dom";

const BottomNavbar = ({ table }) => {
  return (
    <>
      <div className="me-5 ms-5">
        <div className="me-5 ms-5">
          <div className="me-2 ms-2">
            <div className="me-1 ms-1">
              <div className="row d-flex ">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to={"/admindashboard/products"}
                  className={"fs-5 col-4 pe-0 "}
                >
                  <div
                    className={
                      "adminDashBoardMainBodyBlackOrange ps-2   pb-3 pt-3 "
                    }
                  >
                    Products
                  </div>
                </Link>
                <Link
                  className={"fs-5 col-4 ps-0 pe-0"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  to={"/admindashboard/users"}
                >
                  <div
                    className={
                      "adminDashBoardMainBodyBlackColor  pb-3 pt-3 ps-2 "
                    }
                  >
                    Users
                  </div>
                </Link>
                <Link
                  className={"fs-5 col-4 ps-0 "}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  to={"/admindashboard/admins"}
                >
                  <div
                    className={
                      "adminDashBoardMainBodyBlackColor ps-2  pb-3 pt-3  "
                    }
                  >
                    Admins
                  </div>
                </Link>
              </div>
            </div>
            <div className="TABLE-INFO container border-start border-end border-top">
              <div className="row container pb-3 pt-3 d-flex align-items-center">
                <div className="col-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                </div>
                <div className="col-2 ms-1">23</div>
                <div className="col-2 ms-1">Info</div>
                <div className="col-2 ms-1">Email</div>
                <div className="col-2 ms-1">Price</div>
                <div className="col-1 "></div>
                <div className=" col-1 adminDashBoardMainBody pt-1 pb-1 ms-5 d-flex justify-content-center align-items-center">
                  <div> Add new </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
