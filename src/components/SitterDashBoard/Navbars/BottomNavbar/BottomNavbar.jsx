import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import bg from "../../../../assets/i18n/bg.json";

const BottomNavbar = () => {
  const [selected, setSelected] = useState("pending");
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
              <div className="row d-flex ">
                <Link
                  style={{
                    textDecoration: "none",
                    color: selected === "pending" ? "black" : "white",
                  }}
                  to={"/sitterdashboard/pending"}
                  className={"fs-5 col-4 pe-0 "}
                >
                  <div
                    className={
                      selected === "pending"
                        ? "adminDashBoardMainBodyBlackOrange ps-2  pb-3 pt-3 "
                        : "adminDashBoardMainBodyBlackColor ps-2  pb-3 pt-3 "
                    }
                  >
                    {bg.adminDashBoard.pending}
                  </div>
                </Link>
                <Link
                  className={"fs-5 col-4 ps-0 pe-0"}
                  style={{
                    textDecoration: "none",
                    color: selected === "accepted" ? "black" : "white",
                  }}
                  to={"/sitterdashboard/accepted"}
                >
                  <div
                    className={
                      selected === "accepted"
                        ? "adminDashBoardMainBodyBlackOrange  pb-3 pt-3 ps-2 "
                        : "adminDashBoardMainBodyBlackColor pb-3 pt-3   ps-2 "
                    }
                  >
                    {bg.adminDashBoard.accepted}
                  </div>
                </Link>
                <Link
                  className={"fs-5 col-4 ps-0 "}
                  style={{
                    textDecoration: "none",
                    color: selected === "history" ? "black" : "white",
                  }}
                  to={"/sitterdashboard/history"}
                >
                  <div
                    className={
                      selected === "history"
                        ? "adminDashBoardMainBodyBlackOrange ps-2  pb-3 pt-3 "
                        : "adminDashBoardMainBodyBlackColor ps-2  pb-3 pt-3  "
                    }
                  >
                    {bg.adminDashBoard.history}
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
