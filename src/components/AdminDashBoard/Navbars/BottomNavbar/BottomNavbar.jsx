import React, { useState, useEffect } from "react";
import "../../Admins/Body/body.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const [selected, setSelected] = useState("sitters");
  let location = useLocation();
  useEffect(() => {
    setSelected(location.pathname.split("/")[2]);
  }, [location]);

  return (
    <>
      <div className="me-5 ms-5">
        <div className="me-5 ms-5">
          <div className="me-2 ms-2">
            <div className="me-1 ms-1">
              <div className="row  d-flex ">
                <Link
                  style={{
                    textDecoration: "none",
                    color: selected === "sitters" ? "black" : "white",
                  }}
                  to={"/admindashboard/sitters"}
                  className={"fs-5 col-4 pe-0 "}
                >
                  <div
                    className={
                      selected === "sitters"
                        ? "adminDashBoardMainBodyBlackOrange ps-2   pb-3 pt-3 "
                        : "adminDashBoardMainBodyBlackColor ps-2  pb-3 pt-3 "
                    }
                  >
                    Sitters
                  </div>
                </Link>
                <Link
                  className={"fs-5 col-4 ps-0 pe-0"}
                  style={{
                    textDecoration: "none",
                    color: selected === "users" ? "black" : "white",
                  }}
                  to={"/admindashboard/users"}
                >
                  <div
                    className={
                      selected === "users"
                        ? "adminDashBoardMainBodyBlackOrange  pb-3 pt-3 ps-2 "
                        : "adminDashBoardMainBodyBlackColor pb-3 pt-3   ps-2 "
                    }
                  >
                    Users
                  </div>
                </Link>
                <Link
                  className={"fs-5 col-4 ps-0 "}
                  style={{
                    textDecoration: "none",
                    color: selected === "admins" ? "black" : "white",
                  }}
                  to={"/admindashboard/admins"}
                >
                  <div
                    className={
                      selected === "admins"
                        ? "adminDashBoardMainBodyBlackOrange ps-2  pb-3 pt-3 "
                        : "adminDashBoardMainBodyBlackColor ps-2  pb-3 pt-3  "
                    }
                  >
                    Admins
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
